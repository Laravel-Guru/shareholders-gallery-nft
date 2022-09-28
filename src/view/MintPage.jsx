import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-toastify/dist/ReactToastify.css';

import WalletModal from '../components/walletmodal/walletmodal';
import {handleSignificantDecimals, convertAmountFromRawNumber} from '../components/walletmodal/helpers/bignumber';

import shgContract from '../contracts/ShareholdersGallery.json';

toast.configure()

class MintPage extends Component {
    constructor(props) {
        super(props);
        const addr = process.env.REACT_APP_LIVE > 0 ? process.env.REACT_APP_LIVE_ADDR : process.env.REACT_APP_TEST_ADDR;
        const link = process.env.REACT_APP_LIVE > 0 ? "https://etherscan.io/address/" : "https://rinkeby.etherscan.io/address/";
        const addr_link = link + addr;
        this.state = {
            copied: false,
            count: 5,
            connected: false,
            address: '',
            symbol: '',
            balance: '',
            network: '',
            web3: null,
            phase: 'PRE-SALE',
            phase_price: 500,
            phase_qty: 800,
            target_supply: '',
            contract_address: addr,
            addr_link: addr_link,
        };

        this.countHandler.bind(this);
        this.tooltipHandler.bind(this);
        this.getWeb3Details.bind(this);
        this.incrementValue.bind(this);
        this.decrementValue.bind(this);
    }

    countHandler(e) {
        this.setState({ count: e.target.value });
    }
    incrementValue(e) {
        e.preventDefault();
       
        let currentVal = this.state.count;
        
        if (currentVal >= 1) {
            //parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
            this.setState({ count:  1 + Number(currentVal) });
        } else {
            //parent.find('input[name=' + fieldName + ']').val(0);
            this.setState({ count: 1 });
        }
    }
    
    decrementValue(e) {
        e.preventDefault();
        let currentVal = this.state.count;
      
        if (currentVal > 1) {
          //parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
          this.setState({ count: currentVal - 1 });
        } else {
          //parent.find('input[name=' + fieldName + ']').val(0);
          this.setState({ count: 1 });
        }
      }
      
    tooltipHandler(e) {
        e.preventDefault();
        let tooltipNode = e.currentTarget.querySelector('.popuptext');
        tooltipNode.classList.add('show');

        setTimeout(() => {
            tooltipNode.classList.remove('show');
        }, 2000);
    }
    connecting = () => {
        toast("Connecting your wallet...");
    }
    getWeb3Details =  async (param) => {
        if(!param._web3) 
        {
            toast("Disconnecting your wallet...");
            return;
        }
        try {
            
            const _symbol = param._balance.length > 0 ? param._balance[0].symbol : '';
            const _balance = param._balance.length > 0 ? `${handleSignificantDecimals(convertAmountFromRawNumber(param._balance[0].balance), 8)}` : '';
            this.setState({
                address: param._address, 
                network: param._network,
                symbol: _symbol,
                balance: _balance,
                web3: param._web3});
            
    
            const web3 = param._web3;
            if(!web3) return;
            // Getter current phase
            const shg = await new web3.eth.Contract(
                shgContract.abi,
                this.state.contract_address
                );
            const current = await shg.methods.currentPhaseNumber().call();
            console.log("Current Phase", current);
    
            let phase='';
            if(current == 1)
                phase = "PRE-SALE"; //this.setState({phase: "PRE-SALE"});
            else if(current == 2)
                phase = "PHASE 1"; //this.setState({phase: "PHASE 1"});
            else if(current == 3)
                phase = "FINAL PHASE"; //this.setState({phase: "FINAL PHASE"});
            // Getter Phase details
            const curPhase = await shg.methods.currentPhase().call();
            console.log("Price", curPhase.price, "Qty", curPhase.qty);
            this.setState(
                {
                    phase: phase,
                    phase_price: curPhase.price,
                    phase_qty: curPhase.qty
                }
            );
            toast("Connected your wallet!");
        } catch (error) {
            toast(error.message);
        }
    }

    mintBuy =  async () => {
        const enable_mint = process.env.REACT_APP_ENABLE_MINT;
        console.log("Mintable", enable_mint);
        if(!enable_mint || enable_mint <= 0) {
            toast('Not yet active to buy/mint NFTs');
            return;
        }
        if(!this.state.web3) {
            toast('Please connect your wallet on the platform');
            return;
        }
        let nft_count = this.state.count;
        if(!nft_count){
            toast('The amount is invalid');
            return;
        }
    
        try {
            toast("Minting NFTs is in-progress. Please wait for a while....");
            const web3 = this.state.web3;
            const shg = await new web3.eth.Contract(shgContract.abi, this.state.contract_address);
            const wei_amount = await shg.methods.discountPrice(nft_count).call();
            await shg.methods.buyPhase(nft_count).send({from: this.state.address,value:wei_amount, gas: 400000});
            toast('Congratulation! You have successfully purchased. check your SHG balance in your wallet.');
        } catch (error) {
            toast(error.message);
        }
        
    }

    render() {
        const data = {
            discount: [
                {
                    amount: '10',
                    nft: '5'
                },
                {
                    amount: '15',
                    nft: '10'
                },
                {
                    amount: '25',
                    nft: '25'
                }
            ]
        }

        return (
            <Fragment>
                <div className="mint-page">
                    <div className="banner">
                        {/* <figure>
                            <img src={sample4} width="1903" height="800" alt="bg" />
                        </figure> */}

                        <div className="banner-layer text-center pd-t140 d-flex align-items-center justify-content-center flex-column w-100">
                            <h1 className="fw-800 f-72 text-white border-bottom border-bottm-width-7">CURRENT : {this.state.phase}</h1>
                            <h2 className="fw-800 f-40 text-white mb-0 pd-b10">PRICE:&nbsp;&nbsp;<span>${this.state.phase_price}</span> EACH</h2>
                            <h2 className="fw-800 f-40 text-white mb-0 pd-b10">TARGET SUPPLY:&nbsp;&nbsp;<span>{this.state.phase_qty}</span></h2>
                            <h2 className="fw-800 f-40 text-white d-flex align-items-center address">
                                <span className="d-flex align-items-center flex-md-row flex-column">Contract Address:&nbsp;&nbsp;
                                    <span className='ml-2'>
                                        <a href={this.state.addr_link} target="_blank">
                                            {
                                                this.state.contract_address.substring(0, 10) + " ... " + this.state.contract_address.substring(36)
                                            }
                                        </a>
                                        <CopyToClipboard text={this.state.contract_address}
                                            onCopy={() => this.setState({ copied: true })}>
                                            <a href="#" className="popup" onClick={e => this.tooltipHandler(e)}>
                                                <i className="fas fa-copy text-white mr-10"></i>
                                                <span className="popuptext" id="myPopup">Copied!</span>
                                            </a>
                                        </CopyToClipboard>
                                    </span>
                                </span>
                            </h2>

                            {/* <div className="connection-group d-flex align-items-center justify-content-center pd-b60">
                                <input type="text" className="form-control" placeholder="Address" value={this.state.address} readOnly/>
                                <input type="text" className="form-control" placeholder="ChainId" value={this.state.network} readOnly/>
                                <input type="text" className="form-control" placeholder="Balance" value={this.state.balance + this.state.symbol} readOnly/>
                            </div> */}

                            <div className="connection-group d-flex align-items-center justify-content-center pd-b60">
                                <WalletModal connecting={()=>this.connecting()} getInfoCallback={param => this.getWeb3Details(param)} />
                                
                                {/* <input type="number" min="1" max="25" className="form-control" placeholder="Enter Here" onChange={(e) => { this.countHandler(e); }} value={this.state.count} /> */}
                                
                                <div className="input-group">
                                    <input type="button" value="-" className="button-minus" data-field="quantity" onClick={(e) => {this.decrementValue(e)}} />
                                    <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field"  onChange={(e) => { this.countHandler(e); }} value={this.state.count} />
                                    <input type="button" value="+" className="button-plus" data-field="quantity" onClick={(e) => {this.incrementValue(e)}} />
                                </div>

                                <a href="#" className="btn btn-gradient btn-type-one ml-4 d-flex align-items-center justify-content-center" onClick={e => { e.preventDefault(); this.mintBuy(); }}>MINT</a>
                            </div>

                            <h4 className="fw-400 f-24 text-white mb-0">Buy in bulk, Save even more</h4>
                            {
                                data.discount.map((item, index) => (
                                    <h4 className="fw-400 f-24 text-white mb-0" key={'Item:' + index}>{item.amount}% discount for {item.nft}+ NFT's</h4>
                                ))
                            }
                            <div className="pb-80 pd-t30">
                                <h4 className="fw-400 f-24 text-white mb-0 text-left">1. You need to signup and add funds to your metamask.io account.</h4>
                                <h4 className="fw-400 f-24 text-white mb-0 text-left">2. Come to our home page and click mint</h4>
                                <h4 className="fw-400 f-24 text-white mb-0 text-left">3. Connect your metamask wallet to our site</h4>
                                <h4 className="fw-400 f-24 text-white mb-0 text-left">4. Choose your number of NFT'S you want to buy</h4>
                                <h4 className="fw-400 f-24 text-white mb-0 text-left">5. Click mint. </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default MintPage;

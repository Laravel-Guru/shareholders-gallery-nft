import React, { Component } from 'react';
//import moment from 'moment'

class Countdown extends Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  }
  // (function () {
  //   const second = 1000,
  //         minute = second * 60,
  //         hour = minute * 60,
  //         day = hour * 24;
  
  //   //I'm adding this section so I don't have to keep updating this pen every year :-)
  //   //remove this if you don't need it
  //   let today = new Date(),
  //       dd = String(today.getDate()).padStart(2, "0"),
  //       mm = String(today.getMonth() + 1).padStart(2, "0"),
  //       yyyy = today.getFullYear(),
  //       nextYear = yyyy + 1,
  //       dayMonth = "09/30/",
  //       birthday = dayMonth + yyyy;
    
  //   today = mm + "/" + dd + "/" + yyyy;
  //   if (today > birthday) {
  //     birthday = dayMonth + nextYear;
  //   }
  //   //end
    
  //   const countDown = new Date(birthday).getTime(),
  //       x = setInterval(function() {    
  
  //         const now = new Date().getTime(),
  //               distance = countDown - now;
  
  //         document.getElementById("days").innerText = Math.floor(distance / (day)),
  //           document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
  //           document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
  //           document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
  //         //do something later when date is reached
  //         if (distance < 0) {
  //           document.getElementById("headline").innerText = "It's my birthday!";
  //           document.getElementById("countdown").style.display = "none";
  //           document.getElementById("content").style.display = "block";
  //           clearInterval(x);
  //         }
  //         //seconds
  //       }, 0)
  //   }());
  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate} = this.props;
      // const then = moment(timeTillDate, timeFormat);
      // const now = moment();
      // const countdown = moment(then - now);
      // const days = countdown.format('D');
      // const hours = countdown.format('HH');
      // const minutes = countdown.format('mm');
      // const seconds = countdown.format('ss');
      
      const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

      const then = new Date(timeTillDate).getTime();
      const now = new Date().getTime();
      const countdown = then - now;

      let days = 0, hours = 0, minutes = 0, seconds = 0;
      if(timeTillDate != '0') {
        days = Math.floor(countdown / (day));
        hours = Math.floor((countdown % (day)) / (hour));
        minutes = Math.floor((countdown % (hour)) / (minute));
        seconds = Math.floor((countdown % (minute)) / second);
      }
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className="btc_timer_section_wrapper">
        <div id="clockdiv">
          <div>
            <span className="days">{days}</span>
            <div className="smalltext">Days</div>
          </div>
          <div>
            <span className="hours">{hours}</span>
            <div className="smalltext">Hours</div>
          </div>
          <div>
            <span className="minutes">{minutes}</span>
            <div className="smalltext">Minutes</div>
          </div>
          <div>
            <span className="seconds">{seconds}</span>
            <div className="smalltext">Seconds</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
import useQuizStore from "../../../stores/useQuizStore";

export class Chronometer{

    constructor(){
     this.setTimer;
     this.startTime;
     this.interval=null;
    }

    formatTime=(ms)=> {
      const totalSeconds = Math.floor(ms / 1000);
      const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
      const seconds = String(totalSeconds % 60).padStart(2, '0');
      return `${minutes}:${seconds}`;
    }

      startChrono=()=> {
      this.interval = setInterval(() => {
        const elapsed = Date.now() - this.startTime;
        document.getElementById('display').textContent = this.formatTime(elapsed);
        this.setTimer(elapsed)
      }, 1000);
    }

    stopChrono=()=> {
      clearInterval(this.interval);
    }

    resetChrono=()=> {
      clearInterval(this.interval);
      document.getElementById('display').textContent = '00:00';
      
    }

    setStartTime=(startTime)=>{
        this.startTime=startTime;
    }

    setInterval=(interval)=>{
        this.interval=interval;
    }

    setTimerChrono=(setTimer)=>this.setTimer=setTimer;


}
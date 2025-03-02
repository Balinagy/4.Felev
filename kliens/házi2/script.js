class stopWatch{
    constructor(watchContainer)
    {
        this.watchContainer = watchContainer;
    }
    init()
    {
        this.startWatch();
        this.stoppWatch();
        this.resetWatch();
    }
    startWatch()
    {
        document.getElementById('start').addEventListener('click',()=>{
            this.ClearAllIntervals();
            setInterval(this.changeTime,1000);
        });
    }
    stoppWatch(){
        document.getElementById('stop').addEventListener('click',()=>{
        const display = document.getElementById('display');
        display.textContent = display.textContent;
        this.ClearAllIntervals()
    });
    }

    resetWatch()
    {
        document.getElementById('reset').addEventListener('click',()=>{
            display.textContent = "00:00:00"
            this.ClearAllIntervals();
        });
    }

    changeTime(param){
        const display = document.getElementById('display');
        const watchParams = display.textContent.split(":");
        let hour = parseInt(watchParams[0]);
        let minute = parseInt(watchParams[1]);
        let sec = parseInt(watchParams[2]);
        if(sec === 60)
        {
            sec = 0;
            minute += 1;
        }
        else
        {
            sec += 1;
        }
        if(minute === 60)
        {
            minute = 0;
            hour += 1;
        }
        if(hour.toString().length === 1)
        {
            hour = hour.toString();
            hour = "0"+hour;
        }
        if(minute.toString().length === 1)
        {
            minute = minute.toString();
            minute = "0"+minute;
        }
        if(sec.toString().length === 1)
        {
            sec = sec.toString();
            sec = "0"+sec;
        }
        display.textContent = `${hour}:${minute}:${sec}`
    }
    ClearAllIntervals() {
        for (var i = 1; i < 99999; i++)
            window.clearInterval(i);
    }
}

const stopwatch = new stopWatch(
    document.querySelector('container')
);
stopwatch.init();
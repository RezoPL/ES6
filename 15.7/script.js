class Stopwatch extends React.Component {
    constructor(display) {
        super(display);
        this.state = {
            isRunning: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            savedTimes: []
        };
    }

    reset() {
        const times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };

        this.setState({ times });
        this.stop();
    }

    format() {
        return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
    }

    start() {
        if (!this.state.isRunning) {
            this.setState({ isRunning: true });
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.state.isRunning) return;
        this.calculate();
    }

    calculate() {
        const times = this.state.times;
        times.miliseconds += 1;
        if (times.miliseconds >= 100) {
            times.seconds += 1;
            times.miliseconds = 0;
        }
        if (times.seconds >= 60) {
            times.minutes += 1;
            times.seconds = 0;
        }
        this.setState({ times });
    }

    stop() {
        this.state.isRunning = false;
        clearInterval(this.watch);
    }

    render() {
        return (
            <div>
                <div>
                    <a href="#" className="button" onClick={() => this.start()}>Start</a>
                    <a href="#" className="button" onClick={() => this.stop()}>Stop</a>
                    <a href="#" className="button" onClick={() => this.reset()}>Reset</a>
                </div>  
                <div className="stopwatch">{this.format()}</div>
            </div>
        );
    }

}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const app = document.getElementById('app');
ReactDOM.render( <Stopwatch/> , app);
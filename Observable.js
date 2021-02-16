class Observable {

    constructor(observable) {
        this.observable = observable
        this.observersEvent = []
        this.observersValue = []
            //this.observersCbx = []
        for (var key in observable) {
            if (key.search('on') === 0) {
                observable.addEventListener(key.slice(2), (event) => {
                    this.notify(event)
                });
            }
        }

    }

    subscribeValue(observer) {
        this.observersValue.push(observer)
    }
    subscribeEvent(observer) {
        this.observersEvent.push(observer)
    }

    subscribeCbx(observer) {
        this.observersCbx.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(subscriber => subscriber != observer);
    }

    notify(data) {

        this.observersValue.forEach(observer => {
            observer.innerText = data.target.value

        });
        this.observersEvent.forEach(observer => {
            observer.innerText = data.type
        });


    }
    notifyCxb(data) {

        this.observersCbx.forEach(observer => observer.innerText = data);

    }

}
export default Observable;
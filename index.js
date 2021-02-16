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


        /*
                cbx.addEventListener('change', (event) => {
                    console.log(event)
                    this.notifyCxb(cbx.checked)
                });*/

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


class Observer {



}

const inp = document.getElementById('input')
const cbx = document.getElementById('cbx')
const range = document.getElementById('range')
const date = document.getElementById('date')
const color = document.getElementById('color')

const valueInp = document.getElementById('valueInp')
const eventInp = document.getElementById('eventInp')
const valueCbx = document.getElementById('valueCbx')
const valueDate = document.getElementById('valueDate')
const valueRange = document.getElementById('valueRange')
const valueColor = document.getElementById('valueColor')


const observable = new Observable(inp)
observable.subscribeValue(valueInp)
observable.subscribeEvent(eventInp)





//dom.innerText = 'era con asignacion xd'
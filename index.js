//import Observable from './Observable'
//import data from './data.json'



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
            data.target.type != 'checkbox' ?
                observer.innerText = data.target.value :
                observer.innerText = data.target.checked


        });
        this.observersEvent.forEach(observer => {
            observer.innerText = data.type
        });


    }
    notifyCxb(data) {

        this.observersCbx.forEach(observer => observer.innerText = data);

    }

}

const observable = new Observable(document.getElementById('input'))
observable.subscribeValue(document.getElementById('valueInput'))
observable.subscribeEvent(document.getElementById('eventInput'))

const observable2 = new Observable(document.getElementById('cbx'))
observable2.subscribeValue(document.getElementById('valueCbx'))
observable2.subscribeEvent(document.getElementById('eventCbx'))

const observable3 = new Observable(document.getElementById('range'))
observable3.subscribeValue(document.getElementById('valueRange'))
observable3.subscribeEvent(document.getElementById('eventRange'))

const observable4 = new Observable(document.getElementById('date'))
observable4.subscribeValue(document.getElementById('valueDate'))
observable4.subscribeEvent(document.getElementById('eventDate'))

const observable5 = new Observable(document.getElementById('color'))
observable5.subscribeValue(document.getElementById('valueColor'))
observable5.subscribeEvent(document.getElementById('eventColor'))



function clearDom() {

    const tds = document.getElementsByClassName('tds')

    for (let item of tds) {
        item.innerText = ' '
    }
    const inputs = document.getElementsByClassName('inputs')
    for (let item of inputs) {
        item.type === 'checkbox' ? item.checked = false : item.value = ''


    }

}

function loadJson() {

    const json =
        `
    {
        "input": {
            "value": "Lorem ipsum",
            "event": "click"
        },
        "cbx": {
            "value": true,
            "event": "blur"
        },
        "range": {
            "value": 284500,
            "event": "mouseleave"
        },
        "date": {
            "value": "2021-02-11",
            "event": "focus"
        },
        "color": {
            "value": "#eeb5b5",
            "event": "hover"
        }
    }`

    data = JSON.parse(json)
    const tds = document.getElementsByClassName('tds')
    const inputs = document.getElementsByClassName('inputs')

    //let evento = new Event('click');
    for (let item of inputs) {

        item.type === 'checkbox' ? item.checked = data[item.id].value : item.value = data[item.id].value

        for (let td of tds) {
            if (td.id.toLowerCase().slice(5) === item.id) {
                td.id.slice(0, 5) === 'value' ?

                    td.innerText = data[item.id].value :
                    td.innerText = data[item.id].event
            }


        }

        //  item.dispatchEvent(evento)
    }

}
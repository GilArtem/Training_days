import {Phone, call as makeCall} from './1-devices.js';
import MySmartWatch from './3-smartwatch.js';

let iphone: Phone = new Phone ('iPhone X');
makeCall(iphone);

let watch: MySmartWatch = new MySmartWatch('Apple');
watch.printModel();


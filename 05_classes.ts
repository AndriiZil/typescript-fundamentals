class TypeScript {
    version: string;

    constructor(versions: string) {
        this.version = versions;
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel;
    }
}

// The same as Car class
class OnotherCar {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {}
}

// =================================

class Animal {
    protected voice: string = '';
    public color: string = 'black';

    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
// cat.voice // Error because it's protected
cat.setVoice('miau');
console.log(cat.color);

// =================================
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }
    info(): string {
        return 'This is info';
    }
}

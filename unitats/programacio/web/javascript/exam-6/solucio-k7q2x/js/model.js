// ===== Exercise 1: the classes =====
// This file only has definitions: no document, no querySelector.

function euros(amount) {
    return amount.toLocaleString("ca-ES", { style: "currency", currency: "EUR" });
}

/**
 * Returns the price with a discount.
 * @param {number} price - the price before the discount
 * @param {number} percent - the discount, from 0 to 100
 * @returns {number} the price after the discount: applyDiscount(100, 20) is 80
 */
export function applyDiscount(price, percent) {
    // Line 8, logic: it divided by 10 instead of 100.
    return price - price * percent / 100;
}

export class Product {
    // private field: nobody can change the price from outside the class
    #price;

    // constructor
    constructor(name, price, units = 1) {
        this.name = name;            // public property
        this.price = price;          // goes through the set, so the price is checked
        this.units = units;          // public property
    }

    // get: reads the private field
    get price() {
        return this.#price;
    }

    // set: changes the private field after checking it
    set price(value) {
        if (typeof value !== "number" || isNaN(value) || value < 0) {
            const error = new Error("The price must be a number, 0 or more.");
            error.name = "PriceError";
            throw error;
        }
        this.#price = value;
    }

    // method
    total() {
        return this.#price * this.units;
    }

    // method that reuses another method of the class
    toString() {
        return `${this.name} · ${euros(this.#price)} × ${this.units} = ${euros(this.total())}`;
    }

    // method: JSON.stringify does not see #price, so we decide what is saved
    toJSON() {
        return { name: this.name, price: this.#price, units: this.units };
    }

    // static method: belongs to the class, creates a product from plain data
    static fromObject(data) {
        if (data.platform) {
            return new DigitalProduct(data.name, data.price, data.units, data.platform);
        }
        return new Product(data.name, data.price, data.units);
    }
}

// child class: a digital product is a product with a platform
export class DigitalProduct extends Product {
    constructor(name, price, units, platform) {
        super(name, price, units);   // first, the constructor of Product
        this.platform = platform;
    }

    // overridden method: reuses the one of Product with super
    toString() {
        return `${super.toString()} · download for ${this.platform}`;
    }

    toJSON() {
        const data = super.toJSON();
        data.platform = this.platform;
        return data;
    }
}

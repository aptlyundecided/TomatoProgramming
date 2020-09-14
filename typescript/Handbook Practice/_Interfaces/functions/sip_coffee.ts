
import { PROGRAMMER_COFFEE } from '../interfaces/programmer_coffee'
import { PROGRAMMER } from '../types/programmer'


// First since the programmer type already exists... we need to pass one in.
export const TriggerCoffeeSip = (programmer: PROGRAMMER) => {

    // Here is where we would actually use the interface
    const SipTrigger = (coffee_interface: PROGRAMMER_COFFEE) => {
        coffee_interface.sip = programmer.SipCoffee

        coffee_interface.sip()
    }

    // This makes no sense.
    return programmer
}


// This above code makes absolutely no sense, as the programmer class already has an internal method called SipCoffee.
// Maybe that's what it's meant to avoid?
// 
// MAYBE THAT'S WHAT IT'S MEANT TO AVOID!
//
//
// You create a type, and instead of needing to create internal methods to be passed around with it, you can have these external
// functions which ... oh shit yeah this is a requirement for functional programming as the object itself
// should not mutate, therefore the very idea of internal methods doing stuff violates the law of functional immutability.
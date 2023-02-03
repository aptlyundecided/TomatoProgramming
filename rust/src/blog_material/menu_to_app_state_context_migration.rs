/*
 * UI Context
    * ----
    * Describe elements of the program that will exist within
    * the context of the UI menu.
 */
pub enum MenuOption {
    Off,
    On
}

pub fn menu_option_as_u8(op: MenuOption) -> u8 {
    match op {
        MenuOption::Off => 0,
        MenuOption::On => 1
    }
}

pub fn menu_option_as_bool(op: &MenuOption) -> bool {
    match op {
        MenuOption::Off => false,
        MenuOption::On => true
    }
}

pub struct LCDMenu {
    pub pin_selection: u8,
    pub option: MenuOption,
    pub selected_menu_id: u16
}

impl LCDMenu {
    pub fn new() -> LCDMenu {
        LCDMenu {
            pin_selection: 0,
            option: MenuOption::Off,
            selected_menu_id: 0
        }
    }
    pub fn create_pin_update(&self) -> Pin {
        let mut pu: Pin = Pin::new(self.pin_selection);
        pu.active = menu_option_as_bool(&self.option);
        pu
    }
}


/*
 * Menu To App State Context Interfacing
    * ----
    * Describe elements of the program that will facilitate
    * the migration of data from the menu context into
    * the application state context.
 */
pub struct Pin {
    pub id: u8,
    pub pin_name: String,
    pub active: bool
}

impl Pin {
    pub fn new(id: u8) -> Pin {
        Pin {
            id,
            pin_name: String::from("PinXYZ"),
            active: false
        }
    }
    pub fn update_pin_state(&mut self, b: bool) {
        self.active = b;
    }
}


/*
 * Application State Context
    * ----
    * Describe elements of the program that define the
    * application state.
 */
pub struct AppState {
    pub pins: [Pin; 8],
}

impl AppState {
    pub fn new() -> AppState {
        AppState {
            pins: [
                Pin::new(0),
                Pin::new(1),
                Pin::new(2),
                Pin::new(3),
                Pin::new(4),
                Pin::new(5),
                Pin::new(6),
                Pin::new(7),
            ]
        }
    }
    pub fn update_pin_state(&mut self, pin: Pin) {
        self.pins[pin.id as usize].update_pin_state(pin.active);
    }

}
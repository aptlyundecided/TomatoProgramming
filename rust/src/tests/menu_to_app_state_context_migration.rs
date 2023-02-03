#[cfg(test)]
mod tests {
    use crate::blog_material::menu_to_app_state_context_migration as mtpscm;
    use crate::blog_material::menu_to_app_state_context_migration::MenuOption;

    #[test]
    fn test_nav_to_display_schedule_and_back() {
        let mut menu: mtpscm::LCDMenu = mtpscm::LCDMenu::new();
        let mut app_state: mtpscm::AppState = mtpscm::AppState::new();

        assert_eq!(menu.selected_menu_id, 0);
        assert_eq!(app_state.pins[0].active, false);

        // Set the menu option to be active
        menu.option = MenuOption::On;

        // Create a pin update from the menu
        let pin_update_1 = menu.create_pin_update();

        // Load the pin update into the application state
        app_state.update_pin_state(pin_update_1);

        assert_eq!(app_state.pins[0].active, true);
    }
}


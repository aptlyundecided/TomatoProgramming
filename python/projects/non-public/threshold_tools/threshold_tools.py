

class ThresholdTools:
    threshold_value: 0

    def __init__(self, tv):
        """
        Threshold Tools
        ---
        toolkit for comparing a process variable to a threshold
        value specified at the time of instantiation of the
        class.

        Parameters:
        tv (int) number the specified threshold value

        Returns:
        void
        """
        self.threshold_value = tv

    def at_or_above_threshold(self, pv):
        """
        At Or Above Threshold
        ---
        check that a process variable is at or above a given
        threshold value stored within this class instance.
        Parameters:
        pv (int) the process value under evaluation

        Returns:
        boolean
        """
        return pv >= self.threshold_value

    def update_threshold_value(self, tv):
        """
        Update Threshold Value
        ---
        update the locally maintained threshold value in this
        class instance to be compared against process variables.

        Parameters:
        tv (int) the new threshold value

        Returns:
        void
        """
        self.threshold_value = tv

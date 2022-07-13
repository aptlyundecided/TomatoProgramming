from threshold_tools import ThresholdTools

# Replacing String with another string


def test_threshold_at_or_above():
    tt = ThresholdTools(12)
    assert tt.at_or_above_threshold(14) is True

    tt.update_threshold_value(20)
    assert tt.at_or_above_threshold(14) is False

    tt.update_threshold_value(14)
    assert tt.at_or_above_threshold(14) is True




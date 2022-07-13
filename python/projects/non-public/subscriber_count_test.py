from subscriber_count import subscriber_count_too_low


def test_subscriber_count_too_low():
    """
    **Test:: Subscriber Count Too Low:** \n
    check that the function subscriber_count_too_low can identify
    when a count of subscribers is at or above the threshold
    needed to allow permission to view client metrics.
    :return:
    """

    test_response = {'subscriber_count': 12, 'subscriber_threshold': 12}
    assert subscriber_count_too_low(test_response)['too_low'] is False
    test_response = {'subscriber_count': 15, 'subscriber_threshold': 12}
    assert subscriber_count_too_low(test_response)['too_low'] is False
    test_response = {'subscriber_count': 7, 'subscriber_threshold': 12}
    assert subscriber_count_too_low(test_response)['too_low'] is True

    # test that context-wrapping occurs in the function
    test_response = {
        'subscriber_count': 10,
        'subscriber_threshold': 10,
        'pointless_prop': True,
        'empty_prop': None,
        'some_values': [1, 10, 101, 111, 1000, 1001, 1011, 1101, 1110, 1111],
        'another_dict': {'we_are_meta_now': 'meta'}
    }
    test_v1 = subscriber_count_too_low(test_response)

    assert test_v1['too_low'] is False
    assert test_v1['log'][0] == 'Subscriber Count Verification Started:'
    assert test_v1['input_struct_is_valid'] is True
    assert test_v1['input_struct']['empty_prop'] is None


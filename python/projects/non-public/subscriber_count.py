# TODO:AW [refactor] this should retrieve threshold tools from util / tools / etc.
from threshold_tools.threshold_tools import ThresholdTools


def subscriber_count_too_low(app_data_struct):
    """
    **Subscriber Count Too Low** \n
    --- \n
    **High Level Intent:** \n
    Check if api-level access / users should be able to see information
    about a given client account. \n

    **Detailed Intent:** \n
    Receive an application data structure that contains the number of
    subscribers for a specific client account, as well as the threshold
    requirement value for client-data access permission. Check that the
    number of subscribers meets or exceeds the min specified threshold to
    ensure adherence to relevant client privacy regulations.
    \n

    :param app_data_struct: contains subscriber count and threshold props
    :return: context-wrapped-boolean
    """

    # Initialize context wrapper props
    log = []
    input_struct_is_valid = True

    # Init wrap log with init message
    log.append('Subscriber Count Verification Started:')

    # Validate incoming dict has 'subscriber_count' property
    if 'subscriber_count' not in app_data_struct:
        input_struct_is_valid = False
        log.append('property subscriber_threshold not found')
    else:
        log.append('property subscriber count is present')

    # Validate incoming dict has 'subscriber_threshold' property
    if 'subscriber_threshold' not in app_data_struct:
        input_struct_is_valid = False
        log.append('property subscriber_threshold not found')
    else:
        log.append('property subscriber_threshold is present')

    # return wrapped object
    if input_struct_is_valid:
        # If the incoming dict is a valid structure,
        thresh = app_data_struct['subscriber_threshold']
        count = app_data_struct['subscriber_count']
        tt = ThresholdTools(thresh)

        return {
            'too_low': not tt.at_or_above_threshold(count),
            'log': log,
            'input_struct_is_valid': input_struct_is_valid,
            'input_struct': app_data_struct
        }
    else:
        return {
            'too_low': None,
            'log': log,
            'input_struct_is_valid': input_struct_is_valid,
            'input_struct': app_data_struct
        }

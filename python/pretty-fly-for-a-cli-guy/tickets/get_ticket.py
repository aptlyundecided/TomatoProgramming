import pickle
from pathlib import Path
from ticket.ticket import Ticket


def get_ticket(ticket: Ticket):
    if ticket.title != 'untitled':
        path_string = './tickets/data/' + ticket.title + '.pickle'
        # path_string = ticket.title + '.pickle'

        target = Path(path_string)
        if target.is_file():
            with open(path_string, 'rb') as f:
                p = pickle.load(f)
                return p
        else:
            print('file or filepath must exist!')
    else:
        print('Ticket must be given a unique title')

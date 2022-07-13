import pickle
from pathlib import Path
from ticket.ticket import Ticket


def sto_ticket(ticket: Ticket):
    if ticket.title != 'untitled':
        path_string = './tickets/data/' + ticket.title + '.pickle'

        target = Path(path_string)
        if target.is_file():
            with open(path_string, 'wb') as f:
                pickle.dump(ticket, f)
        else:
            with open(path_string, 'wb') as f:
                pickle.dump(ticket, f)
    else:
        print('Ticket must be given a unique title')

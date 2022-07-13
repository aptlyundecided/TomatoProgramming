from ticket.ticket import Ticket
import pickle


class TicketDataProvider:
    def sto_ticket(self, ticket: Ticket):
        if ticket.title != 'untitled':
            pickle.dump(ticket, './data/' + ticket.title)
        else:
            print('Ticket must be given a unique title')

# Import Directory Config first because it configures this project
# as a local module.
import dir_config

from tickets.ticket.ticket import Ticket
from tickets.sto_ticket import sto_ticket
from tickets.get_ticket import get_ticket


t = Ticket({'title': 'fi', 'description': 'similarly named for testing something out.'})
print(t.title)

sto_ticket(t)
get_ticket(t)

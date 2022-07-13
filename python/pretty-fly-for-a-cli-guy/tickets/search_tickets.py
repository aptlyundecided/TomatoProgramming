import sys
from pathlib import Path


def search_tickets(p: str):
    c = Path('data')
    tickets = c.iterdir()
    matches = []
    for ticket in tickets:
        if p in str(ticket):
            matches.append(ticket)
    print(matches)
    return matches


search_tickets('fi')

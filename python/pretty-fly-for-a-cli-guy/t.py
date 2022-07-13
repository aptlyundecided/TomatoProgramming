import typer
from typing import Optional


def main(first_name: str, last_name: str = '', formal: bool = False):
    """
    Say hi to the user using first_name.  optionally update the greeting
    based on parameterized inputs.\n
    :param first_name:
    :param last_name:
    :param formal:
    :return:
    """
    if formal:
        typer.echo(f'Hello, Mr. {first_name} {last_name}!')
    else:
        typer.echo(f'Hello, {first_name} {last_name}!')


if __name__ == '__main__':
    typer.run(main)

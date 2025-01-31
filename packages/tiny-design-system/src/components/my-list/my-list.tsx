import { Component, Element, Prop, Event, EventEmitter, h, JSX } from '@stencil/core';

export type ListItem = {
  id: string | number;
  title: string;
  description: string;
};

@Component({
  tag: 'my-list',
  shadow: true,
})
export class MyList {
  @Prop()
  items: ListItem[] = [];

  @Prop()
  highlightedItem: string | number;

  @Element()
  host: any;

  @Event() clickListItem: EventEmitter<any>;

  handleClickListItem(listItem: ListItem) {
    this.clickListItem.emit(listItem);
  }


  render() {
    return (
      <ul>
        {this.items.map(
          ({ id, title, description }) =>
            (
              <li onClick={() => this.handleClickListItem({ id, title, description })} key={id} style={id === this.highlightedItem ? { background: 'yellow' } : undefined}>
                <b>{title}</b>
                <p>{description}</p>
              </li>
            ) as JSX.Element,
        )}
      </ul>
    ) as JSX.Element;
  }
}

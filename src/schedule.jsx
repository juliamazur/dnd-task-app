import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import ScheduleColumn from './column'

const Container = styled.div`
  display: flex;
`;

class ScheduleContainer extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

      const start = this.state.columns[source.droppableId];
      const finish = this.state.columns[destination.droppableId];

      if (start === finish) {
        const newitemIds = Array.from(start.itemIds);
        newitemIds.splice(source.index, 1);
        newitemIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          itemIds: newitemIds,
        };

        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn,
          },
        };
        this.setState(newState);
        return;
      }

      const startitemIds = Array.from(start.itemIds);
      startitemIds.splice(source.index, 1);
      const newStart = {
        ...start,
        itemIds: startitemIds,
      };

      const finishitemIds = Array.from(finish.itemIds);
      finishitemIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        itemIds: finishitemIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      this.setState(newState);
      return;
    }

  render() {
    return(
      <div>
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const items = column.itemIds.map(itemId => this.state.items[itemId]);

          return <ScheduleColumn key={column.id} column={column} items={items}/>;
        })}
        </Container>
      </DragDropContext>
      </div>
    );
  }
}

export default ScheduleContainer;

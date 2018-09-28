import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Item from './task'

const Container = styled.div`
  border: 1px solid lightgrey;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const DraggableList = styled.div`
  flex-grow: 1;
  min-height: 100px;
`;

class ScheduleColumn extends React.Component {
  render() {
    return (
      <Container>
        {this.props.column.title}
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <DraggableList
              {...provided.droppableProps}
              innerRef={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.items.map((item, index)  => <Item  key={item.id} item={item} index={index} />)}
              {provided.placeholder}
            </DraggableList>
          )}

        </Droppable>
      </Container>
    );
  }
}

export default ScheduleColumn;

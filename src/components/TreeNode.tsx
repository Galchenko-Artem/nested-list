import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlus, FiTrash2 } from 'react-icons/fi';

interface TreeNodeProps {
  id: number;
  onDelete: (id: number) => void;
  canDelete: boolean;
}

const NodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-left: 1px dashed #ccc;
  padding-left: 20px;
`;

const NodeActions = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const NodeContent = styled.div`
  display: flex;
  align-items: center;
`;

const NodeLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: #555;
  cursor: pointer;
  margin-right: 5px;
  padding: 5px;
  border-radius: 4px;

  &:hover {
    background-color: #eee;
  }

  &:disabled {
    color: #aaa;
    cursor: default;
  }
`;

const TreeNode: React.FC<TreeNodeProps> = ({ id, onDelete, canDelete }) => {
  const [children, setChildren] = useState<number[]>([]);
  const [nodeIdCounter, setNodeIdCounter] = useState(1);

  const addChild = () => {
    setChildren([...children, nodeIdCounter]);
    setNodeIdCounter(nodeIdCounter + 1);
  };

  const deleteChild = (childId: number) => {
    setChildren(children.filter((id) => id !== childId));
  };

  return (
    <NodeContainer>
      <NodeActions>
        <NodeContent>
          <NodeLabel>Элемент {id}</NodeLabel>
          <ActionButton onClick={addChild} title="Добавить наследника">
            <FiPlus size={16} />
          </ActionButton>
          {canDelete && (
            <ActionButton
              onClick={() => onDelete(id)}
              title="Удалить элемент"
            >
              <FiTrash2 size={16} />
            </ActionButton>
          )}
        </NodeContent>
      </NodeActions>
      {children.map((childId) => (
        <TreeNode
          key={childId}
          id={childId}
          onDelete={deleteChild}
          canDelete={true}
        />
      ))}
    </NodeContainer>
  );
};

export default TreeNode;

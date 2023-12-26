import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// 树节点组件
const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {isOpen ? '[-]' : '[+]'}{' '}
        <Link to={`/${node.link.toLowerCase()}`}>{node.name}</Link>
      </div>
      {isOpen && hasChildren && (
        <div style={{ marginLeft: '20px' }}>
          {node.children.map((childNode, index) => (
            <TreeNode key={index} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );
};

// 树状导航栏组件
const TreeNavigation = ({ data }) => {
  return (
    <div>
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};


// 示例数据
const treeData = [
  {
    name: '工具',
		link: '',
    children: [
      {
        name: 'image-base64',
				link: 'image-base64',
      },
      {
        name: 'Node 1.2',
				link: ''
      },
    ],
  },
  {
		link: '',
    name: '灵知',
    children: [
      {
        name: '租户数据权限',
        link: 'tenantAuth'
      }
    ],
  },
];


const TreeNavigationInstance = () => {
	return (
		<TreeNavigation data={treeData}/>
	)
}



export default TreeNavigationInstance;
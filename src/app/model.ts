import { DsDesctiption } from "src/models/model";


export const COMPLEXITIES = [
  'O(1)',
  'O(log* n)',
  'O(log log n)',
  'O(log n)',
  'poly(log n)',
  'O(n)',
  'O(n log* n)',
  'O(n log n)',
  'O(n2)',
  'O(n3)'
];

export const TAGS = [
  'Array',
  'LinkedList',
  'Stack',
  'Queue',
  'Graph',
  'Tree',
  'Algorithms',
  'Searching',
  'Sorting',
  'Dynamic Programming',
  'Hash-Table'
];

export const DESCRIPTION: DsDesctiption[] = [
  {
    topic: 'Array',
    desc: 'An array data structure, or simply an array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. An array is stored such that the position of each element can be computed from its index tuple by a mathematical formula.',
  },
  {
    topic: 'Stack',
    desc: 'A stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet remove. A stack may be implemented to have a bounded capacity and it can be easily implemented either through an array or a linked list.'
  },
  {
    topic: 'Queue',
    desc: 'A queue is an abstract data type or collection in which the entities are kept in order and the principal operations on the collection are the addition of entities to the rear terminal position.A queue is an example of a linear data structure, or more abstractly a sequential collection. Common implementations are circular buffers and linked lists'
  },
  {
    topic: 'Linked List',
    desc: 'A linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It consists a collection of nodes which together represent a sequence. Faster access, such as random access, is not feasible. Arrays have better cache locality compared to linked lists.'
  },
  {
    topic: 'Tree',
    desc: 'A tree is a data structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.It can be defined recursively as a collection of nodes, where each node is a data structure consisting of a value, together with a list of references to nodes, with the constraints that no reference is duplicated, and none points to the root.'
  },
  {
    topic: 'Graph',
    desc: 'A graph is a data type that is meant to implement the undirected graph and directed graph, specifically the field of graph theory.Graph consists of a finite set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.'
  },
  {
    topic: 'Searching',
    desc: 'A search algorithm is any algorithm which solves the search problem, namely, to retrieve information stored within some data structure, or calculated in the search space of a problem domain. The appropriate search algorithm often depends on the data structure being searched, and may also include prior knowledge about the data.'
  },
  {
    topic: 'Hash Table',
    desc: 'A hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. The hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where it generates the same index for more than one key.'
  }
];

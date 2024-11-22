/*
    СТРУКТУРЫ ДАННЫХ
*/




//  Интерфейс для одного узла данных (Ноды). 
//  У этого интерфейса два дженерика. Первый T тип наследуется от D, D по умолчанию any
//  Можно указать тип у D, тогда T будет ограничен этим типом
interface IDataStructureNode<ValueType extends ValueTypeInterface, ValueTypeInterface = any> {
    value : ValueType;
}



// Опишем интерфейс для структур данных
interface IDataStructure<ValueType extends ValueTypeInterface, ValueTypeInterface=any> {
    push(node : IDataStructureNode<ValueType,ValueTypeInterface>) : void;
    // MAP вернет новый массив с неопределенным типом
    map<N> ( callback : (node : IDataStructureNode<ValueType,ValueTypeInterface>)=>N ) : N[];
    foreach ( callback : (node : IDataStructureNode<ValueType,ValueTypeInterface>)=>void ) : void;
    find ( callback : (node : IDataStructureNode<ValueType,ValueTypeInterface>) => boolean) : IDataStructureNode<ValueType,ValueTypeInterface>;
    filter ( callback : (node : IDataStructureNode<ValueType,ValueTypeInterface>) => boolean ) : IDataStructure<ValueType,ValueTypeInterface>;
}


/*
    Связный список
    Linked List (LL)
*/

// Конкретная реализация узла. Но все равно мы оставляем возможность добавлять в значение любой тип
export class LinkedListNode<ValueType> implements IDataStructureNode<ValueType> {
    value: ValueType;
    // Это ссылка на следующий элемент в списке
    next : LinkedListNode<ValueType>;
} 



export class LinkedList<ValueType> implements IDataStructure<ValueType> {
   
    // Ссылка на первый элемент структуры. Он всегда должен быть известен. Если он есть
    private head: LinkedListNode<ValueType> | null;
 
    push(node: LinkedListNode<ValueType>): void {
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }


    foreach(callback: (node: LinkedListNode<ValueType>) => void): void {
        let current = this.head;
        while (current) {
            callback(current);
            current = current.next;
        }
    }
    
    filter(callback: (node: LinkedListNode<ValueType>) => boolean): LinkedList<ValueType> {
        let filteredList = new LinkedList<ValueType>();
        let current = this.head;
        while (current) {
            if (callback(current)) {
                filteredList.push(current);
            }
            current = current.next;
        }
        return filteredList;
    }
   
    

    map<NewType>(callback: (node: LinkedListNode<ValueType>) => NewType): NewType[] {
        let result: NewType[] = [];
        let current = this.head;
        while (current) {
            result.push(callback(current));
            current = current.next;
        }
        return result;
    }

    find(callback: (node: LinkedListNode<ValueType>) => boolean): LinkedListNode<ValueType> {
        let current = this.head;
        while (current) {
            if (callback(current)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

}







/*
    Бинарное дерево поиска
    Binary Search tree (BST)
*/

// Интерфейс с методом сравнения. Узел дерева должен соответствовать этому интерфейсу
export interface IComparable {
    compare(compareObject: IComparable, compareSubject: IComparable): boolean;
}

// Конкретная реализация узла дерева.
export class BinarySearchTreeNode<ValueType extends IComparable> implements IDataStructureNode<ValueType, IComparable> {
    value: ValueType;
    left? : BinarySearchTreeNode<ValueType>;
    right? : BinarySearchTreeNode<ValueType>;
    parent: BinarySearchTreeNode<ValueType>;
}


export class BinarySearchTree<ValueType extends IComparable> implements IDataStructure<ValueType, IComparable> {
    root: BinarySearchTreeNode<ValueType> | null;

    constructor() {
        this.root = null;
    }

    push(node: BinarySearchTreeNode<ValueType>): void {
        if (!this.root) {
            this.root = node as BinarySearchTreeNode<ValueType>;
            return;
        }

        let currentNode = this.root;
        while (true) {
            if (node.value.compare(currentNode.value, node.value)) {
                if (!currentNode.left) {
                    currentNode.left = node as BinarySearchTreeNode<ValueType>;
                    (node as BinarySearchTreeNode<ValueType>).parent = currentNode;
                    return;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = node as BinarySearchTreeNode<ValueType>;
                    (node as BinarySearchTreeNode<ValueType>).parent = currentNode;
                    return;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    map<N>(callback: (node: BinarySearchTreeNode<ValueType>) => N): N[] {
        const result: N[] = [];
        this._map(this.root, callback, result);
        return result;
    }

    private _map<N>(node: BinarySearchTreeNode<ValueType> | null, callback: (node: IDataStructureNode<ValueType, IComparable>) => N, result: N[]): void {
        if (!node) {
            return;
        }

        result.push(callback(node));
        this._map(node.left, callback, result);
        this._map(node.right, callback, result);
    }

    foreach(callback: (node: BinarySearchTreeNode<ValueType>) => void): void {
        this._foreach(this.root, callback);
    }

    private _foreach(
            node: BinarySearchTreeNode<ValueType> | null, 
            callback: (node: BinarySearchTreeNode<ValueType>) => void) : void {
        if (!node) {
            return;
        }
        callback(node);
        this._foreach(node.left, callback);
        this._foreach(node.right, callback);
    }

    find( callback: (node: BinarySearchTreeNode<ValueType>) => boolean ): BinarySearchTreeNode<ValueType> {
        let currentNode = this.root;
        return this._find(currentNode, callback);
    }

    private _find(
        node: BinarySearchTreeNode<ValueType>, 
        callback: (node: BinarySearchTreeNode<ValueType>) => boolean) : BinarySearchTreeNode<ValueType> {
        if (callback(node)) {
            return node;
        }  else {
            if (node.left) {
                const nodeAnswer = this._find(node.left, callback);
                if (nodeAnswer) {
                    return nodeAnswer;
                }
            }
            if (node.right) {
                const nodeAnswer = this._find(node.right, callback);
                if (nodeAnswer) {
                    return nodeAnswer;
                }
            }
            if (!node.left && !node.right) {
                return null;
            }
        }
    }

    filter(callback: (node: IDataStructureNode<ValueType, IComparable>) => boolean): BinarySearchTree<ValueType> {
        const newTree = new BinarySearchTree<ValueType>();
        this._filter(this.root, callback, newTree);
        return newTree;
    }

    private _filter(
            node: BinarySearchTreeNode<ValueType> | null, 
            callback: (node: IDataStructureNode<ValueType, IComparable>) => boolean, 
            newTree: BinarySearchTree<ValueType>): void {
        if (!node) {
            return;
        }

        if (callback(node)) {
            newTree.push(node);
        }

        this._filter(node.left, callback, newTree);
        this._filter(node.right, callback, newTree);
    }
}









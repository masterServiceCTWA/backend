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
    Linked List
*/

// Конкретная реализация узла. Но все равно мы оставляем возможность добавлять в значение любой тип
export class LinkedListNode<ValueType> implements IDataStructureNode<ValueType> {
    value: ValueType;
    // Это ссылка на следующий элемент в списке
    next : LinkedListNode<ValueType>;
} 



export class LinkedList<ValueType> implements IDataStructure<ValueType> {
    
    
    
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

    map<NewType>(callback: (node: LinkedListNode<ValueType>) => NewType): NewType[] {
        let result: NewType[] = [];
        let current = this.head;
        while (current) {
            result.push(callback(current));
            current = current.next;
        }
        return result;
    }

    

    find(callback: (node: LinkedListNode<ValueType>) => boolean): LinkedListNode<ValueType> | undefined {
        let current = this.head;
        while (current) {
            if (callback(current)) {
                return current;
            }
            current = current.next;
        }
        return undefined;
    }

}










interface IComparable {
    compare(compareObject : IComparable, compareSubject : IComparable) : boolean;
}

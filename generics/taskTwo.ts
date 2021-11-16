// Map Challenge
// Array of Objects (Key/Value) -> items
// Methods: get(Key), put({ C, V })
// clear(), print()

type Par<K, V> = {
  key: K;
  value: V;
};

class MapTask<K, V> {
  itens: Array<Par<K, V>> = new Array<Par<K, V>>();

  get(key: K): Par<K, V> | null {
    const result = this.itens.filter(i => i.key === key)
    return result ? result[0] : null
  }

  put(par: Par<K, V>) {
    const found = this.get(par.key)
    if (found) {
      found.value = par.value
    } else {
      this.itens.push(par)
    }
  }

  clear(){
    this.itens = new Array<Par<K, V>>()
  }

  print(){
    console.log(this.itens);
  }
}

const map = new MapTask<number, string>()
map.put({ key: 1, value: 'Pedro' })
map.put({ key: 2, value: 'Rebeca' })
map.put({ key: 3, value: 'Maria' })
map.put({ key: 1, value: 'Gustavo' })
 
console.log(map.get(2))
map.print()
map.clear()
map.print()

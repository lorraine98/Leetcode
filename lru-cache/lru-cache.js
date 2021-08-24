class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

    }
    
    get(key) {
        if(!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return this.cache.get(key);
        
    }
    
    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if(this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
    
    
}
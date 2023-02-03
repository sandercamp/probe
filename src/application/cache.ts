const storage: Storage|null = window.localStorage || null;

interface ExpirableItem<T> {
    expires: Date;
    value: T
}

const isExpirableItem = <T>(value: unknown): value is ExpirableItem<T> => {
    if (value !== null && typeof value === 'object') {
        return 'expires' in value && 'value' in value;
    }

    return false;
}

const fromCache = <T>(key: string): T|null => {
    if (cacheIsEnabled()) {
        const cachedItem = storage.getItem(key);

        if (cachedItem !== null) {
            const parsedItem: T | ExpirableItem<T> = JSON.parse(cachedItem);

            if (!isExpirableItem<T>(parsedItem)) {
                return parsedItem;
            }

            if (new Date(parsedItem.expires) >= new Date()) {
                return parsedItem.value;
            }
        }
    }

    return null;
}

const toCache = (item: unknown, key: string, expires?: Date): void => {
    if (cacheIsEnabled()) {
        const isExpirable = expires instanceof Date;
        const cacheItem = isExpirable ? { expires: expires, value: item } : item;

        storage.setItem(key, JSON.stringify(cacheItem));
    }
}

const cacheIsEnabled = (): boolean => storage !== null;

export { fromCache, toCache, isExpirableItem, cacheIsEnabled };

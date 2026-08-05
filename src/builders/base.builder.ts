export abstract class BaseBuilder<T> {
    protected data: Partial<T> = {};

    build(): T {
        return this.data as T;
    }
}
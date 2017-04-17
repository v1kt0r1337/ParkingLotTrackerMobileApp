/**
 * Created by archheretic on 06.04.17.
 */
export interface Serializable<T> {
    deserialize(input: Object): T;
}

export class Member implements Serializable<Member> {
    id: number;

    deserialize(input) {
        this.id = input.id;
        return this;
    }
}


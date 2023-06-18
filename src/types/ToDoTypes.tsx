
export enum TaskState {
    ALL,
    COMPLETED,
    PROGRESS,
};

export type TTask = {
    id: number,
    value: string,
    state: TaskState,
}

// 状態管理ライブラリやcontextの方がいいかも？
export type TTasks = {
    count: number,
    tasks: TTask[],
}
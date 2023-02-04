export const dataState:DataStateType = {
    pages:
    [
        {
            heading:'Цикл while',
            about:'Цикл  while имеет следующий синтаксис'

        },
        {
            heading:'Цикл for',
            about:'Цикл for имеет следующий синтаксис'

        },
        {
            heading:'Конструкция switch' ,
            about:'Конструкция switch замеяет собой сразу несколько'

        },
    ]
}



export type DataStateType = {
    pages:Array<PagesType>
}

export type PagesType = {
    heading:string;
    about :string
}
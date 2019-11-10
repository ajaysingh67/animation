import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger(
        'inOutAnimation', 
        [
          transition(
            ':enter', 
            [
              style({ height: 0, opacity: 0 }),
              animate('1s ease-out', style({ height: 300, opacity: 1 }))
            ]
          ),
          transition(
            ':leave', 
            [
              style({ height: 300, opacity: 1 }),
              animate('1s ease-in',style({ height: 0, opacity: 0 }))
            ]
          )
        ]
      )
]
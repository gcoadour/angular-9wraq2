import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'power-grid-status',
  templateUrl: './power-grid-status.component.html',
  styleUrls: ['./power-grid-status.component.scss'],
})
export class PowerGridStatusComponent implements OnInit {
  detailsValues: any;
  daysValues: any = [
    {
      GenerationFichier: '2022-06-03T07:36:25+02:00',
      jour: '2022-06-06T00:00:00+02:00',
      dvalue: 1,
      message: 'Situation normale ',
      values: [
        {
          pas: 0,
          hvalue: 1,
        },
        {
          pas: 1,

          hvalue: 1,
        },

        {
          pas: 2,

          hvalue: 1,
        },

        {
          pas: 3,

          hvalue: 1,
        },

        {
          pas: 4,

          hvalue: 1,
        },

        {
          pas: 5,

          hvalue: 1,
        },

        {
          pas: 6,

          hvalue: 1,
        },

        {
          pas: 7,

          hvalue: 1,
        },

        {
          pas: 8,

          hvalue: 1,
        },

        {
          pas: 9,

          hvalue: 1,
        },

        {
          pas: 10,

          hvalue: 1,
        },

        {
          pas: 11,

          hvalue: 1,
        },

        {
          pas: 12,

          hvalue: 1,
        },

        {
          pas: 13,

          hvalue: 1,
        },

        {
          pas: 14,

          hvalue: 1,
        },

        {
          pas: 15,

          hvalue: 1,
        },

        {
          pas: 16,

          hvalue: 1,
        },

        {
          pas: 17,

          hvalue: 1,
        },

        {
          pas: 18,

          hvalue: 1,
        },

        {
          pas: 19,

          hvalue: 1,
        },

        {
          pas: 20,

          hvalue: 1,
        },

        {
          pas: 21,

          hvalue: 1,
        },

        {
          pas: 22,

          hvalue: 1,
        },

        {
          pas: 23,

          hvalue: 1,
        },
      ],
    },

    {
      GenerationFichier: '2022-06-03T07:36:25+02:00',

      jour: '2022-06-04T00:00:00+02:00',

      dvalue: 3,

      message: "Coupures d'électricité programmées",

      values: [
        {
          pas: 0,

          hvalue: 1,
        },

        {
          pas: 1,

          hvalue: 1,
        },

        {
          pas: 2,

          hvalue: 1,
        },

        {
          pas: 3,

          hvalue: 1,
        },

        {
          pas: 4,

          hvalue: 1,
        },

        {
          pas: 5,

          hvalue: 2,
        },

        {
          pas: 6,

          hvalue: 2,
        },

        {
          pas: 7,

          hvalue: 3,
        },

        {
          pas: 8,

          hvalue: 3,
        },

        {
          pas: 9,

          hvalue: 3,
        },

        {
          pas: 10,

          hvalue: 3,
        },

        {
          pas: 11,

          hvalue: 3,
        },

        {
          pas: 12,

          hvalue: 3,
        },

        {
          pas: 13,

          hvalue: 2,
        },

        {
          pas: 14,

          hvalue: 2,
        },

        {
          pas: 15,

          hvalue: 2,
        },

        {
          pas: 16,

          hvalue: 2,
        },

        {
          pas: 17,

          hvalue: 3,
        },

        {
          pas: 18,

          hvalue: 3,
        },

        {
          pas: 19,

          hvalue: 3,
        },

        {
          pas: 20,

          hvalue: 2,
        },

        {
          pas: 21,

          hvalue: 2,
        },

        {
          pas: 22,

          hvalue: 2,
        },

        {
          pas: 23,

          hvalue: 2,
        },
      ],
    },

    {
      GenerationFichier: '2022-06-03T07:36:25+02:00',

      jour: '2022-06-05T00:00:00+02:00',

      dvalue: 2,

      message: "Risque de coupures d'électricité",

      values: [
        {
          pas: 0,

          hvalue: 1,
        },

        {
          pas: 1,

          hvalue: 1,
        },

        {
          pas: 2,

          hvalue: 1,
        },

        {
          pas: 3,

          hvalue: 1,
        },

        {
          pas: 4,

          hvalue: 1,
        },

        {
          pas: 5,

          hvalue: 1,
        },

        {
          pas: 6,

          hvalue: 1,
        },

        {
          pas: 7,

          hvalue: 2,
        },

        {
          pas: 8,

          hvalue: 2,
        },

        {
          pas: 9,

          hvalue: 2,
        },

        {
          pas: 10,

          hvalue: 2,
        },

        {
          pas: 11,

          hvalue: 2,
        },

        {
          pas: 12,

          hvalue: 1,
        },

        {
          pas: 13,

          hvalue: 1,
        },

        {
          pas: 14,

          hvalue: 1,
        },

        {
          pas: 15,

          hvalue: 1,
        },

        {
          pas: 16,

          hvalue: 1,
        },

        {
          pas: 17,

          hvalue: 2,
        },

        {
          pas: 18,

          hvalue: 2,
        },

        {
          pas: 19,

          hvalue: 1,
        },

        {
          pas: 20,

          hvalue: 1,
        },

        {
          pas: 21,

          hvalue: 1,
        },

        {
          pas: 22,

          hvalue: 1,
        },

        {
          pas: 23,

          hvalue: 1,
        },
      ],
    },

    {
      GenerationFichier: '2022-06-03T07:36:25+02:00',

      jour: '2022-06-03T00:00:00+02:00',

      dvalue: 0,

      message: "Coupures d'électricité en cours",

      values: [
        {
          pas: 0,

          hvalue: 0,
        },

        {
          pas: 1,

          hvalue: 0,
        },

        {
          pas: 2,

          hvalue: 0,
        },

        {
          pas: 3,

          hvalue: 0,
        },

        {
          pas: 4,

          hvalue: 0,
        },

        {
          pas: 5,

          hvalue: 0,
        },

        {
          pas: 6,

          hvalue: 0,
        },
        {
          pas: 7,

          hvalue: 0,
        },

        {
          pas: 8,

          hvalue: 0,
        },

        {
          pas: 9,

          hvalue: 0,
        },

        {
          pas: 10,

          hvalue: 0,
        },

        {
          pas: 11,

          hvalue: 0,
        },

        {
          pas: 12,

          hvalue: 0,
        },

        {
          pas: 13,

          hvalue: 0,
        },

        {
          pas: 14,

          hvalue: 0,
        },

        {
          pas: 15,

          hvalue: 0,
        },

        {
          pas: 16,

          hvalue: 0,
        },

        {
          pas: 17,

          hvalue: 0,
        },

        {
          pas: 18,

          hvalue: 0,
        },

        {
          pas: 19,

          hvalue: 0,
        },

        {
          pas: 20,

          hvalue: 0,
        },

        {
          pas: 21,

          hvalue: 0,
        },

        {
          pas: 22,

          hvalue: 0,
        },

        {
          pas: 23,

          hvalue: 0,
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.detailsValues = this.daysValues[0];
  }
  changeSelectedDay(selectedDay: any) {
    this.detailsValues = selectedDay;
  }
}

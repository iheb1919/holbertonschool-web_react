import printBestStudents from './8-seq.js';
import {Map} from 'immutable'
const grades = {
	1: {
	  score: 9,
	  firstName: 'guillaume',
	  lastName: 'salva',
	},
	2: {
		score: 99,
		firstName: 'qsdqdf',
		lastName: 'salva',
	  }
  };

  console.log(printBestStudents(grades))
  
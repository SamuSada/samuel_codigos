"use strict";
for (var hora = 0; hora <= 23; hora++) {
    if (hora >= 8 && hora <= 12) {
        console.log(`Son las ${hora}:00. ${"CUCÚ! ".repeat(hora)}`);
    } else if (hora >= 13 && hora <= 22) {
        console.log(`Son las ${hora}:00. ${"CUCÚ! ".repeat(hora - 12)}`);
    } else {
        console.log(`Son las ${hora}:00`);
    }
}
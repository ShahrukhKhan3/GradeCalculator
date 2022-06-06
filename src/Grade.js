
export default function Grade({m}) {
    let grade = "";
    if (m > 90 && m <=100)
        return grade = 'A'
    else if (m > 80 && m < 89)
        return grade = 'B';
    else if (m >= 70 && m <= 80)
        return grade = "C";
    else if (m >= 60 && m <= 70)
        return grade = "D";
    else if (m >= 50 && m <= 60)
        return grade = "E";
    else
        return grade = "F"
}

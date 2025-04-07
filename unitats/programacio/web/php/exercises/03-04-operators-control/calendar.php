<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: antiquewhite;
        }

        .month {
            display: grid;
            grid-template-columns: auto auto auto auto auto auto auto;
            max-width: 600px;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
        }

        h2 {
            margin-top: 30px;
            text-align: center;
        }

        .day {
            width: 70px;
            height: 70px;
        }

        .day_number {
            border: 1px solid black;
            margin: 1px;
            background-color: white;
            position: relative;

        }

        .name_day {
            height: fit-content;
            font-size: 75%;
            text-align: center;
            font-weight: bold;
            color: coral;
            margin: 10px 0;
        }

        .day_number>p {
            position: absolute;
            top: 5px;
            right: 5px;
            margin: 0;
            font-weight: bold;
        }

        .day_number>i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 150%;
        }

        .special_day {
            background-color: coral;
        }
    </style>
</head>

<body>
    <h1>Calendar of 2023</h1>
    <?php
    $year = 2023;

    function get_spaces_before_day_1($month, $year)
    {
        //echo 'Month: '. $month. '<br>';
        //echo 'Date: '. $year . '-' . $month . '-01<br>';
        $number_day = date('w', strtotime($year . '-' . $month . '-01'));
        //echo 'Number day: '. $number_day. '<br>';
    
        if ($number_day == 0) {
            return 6;
        } else {
            return $number_day - 1;
        }

    }

    function get_specialday_from_day($day)
    {
        $special_days = [
            ['date' => '22-04-2023', 'icon' => 'fa-globe', 'description' => 'Día de la Tierra'],
            ['date' => '20-03-2023', 'icon' => 'fa-star', 'description' => 'Día de la Astronomía'],
            ['date' => '08-04-2023', 'icon' => 'fa-leaf', 'description' => 'Día de la Biología'],
            ['date' => '25-04-2023', 'icon' => 'fa-flask', 'description' => 'Día del ADN'],
            ['date' => '12-04-2023', 'icon' => 'fa-space-shuttle', 'description' => 'Día del Espacio'],
            ['date' => '15-12-2023', 'icon' => 'fa-laptop', 'description' => 'Día de la Informática'],
            ['date' => '22-03-2023', 'icon' => 'fa-tint', 'description' => 'Día del Agua'],
            ['date' => '09-11-2023', 'icon' => 'fa-lightbulb-o', 'description' => 'Día del Inventor'],
            ['date' => '10-11-2023', 'icon' => 'fa-flask', 'description' => 'Día del Científico'],
            ['date' => '14-02-2023', 'icon' => 'fa-bolt', 'description' => 'Día de la Energía'],
            ['date' => '14-05-2023', 'icon' => 'fa-balance-scale', 'description' => 'Día de la Física'],
            ['date' => '15-11-2023', 'icon' => 'fa-flask', 'description' => 'Día del Químico'],
            ['date' => '25-09-2023', 'icon' => 'fa-medkit', 'description' => 'Día del Medicamento'],
            ['date' => '02-03-2023', 'icon' => 'fa-android', 'description' => 'Día del Robot'],
            ['date' => '30-01-2023', 'icon' => 'fa-eye', 'description' => 'Día del Holograma'],
            ['date' => '23-03-2023', 'icon' => 'fa-cloud', 'description' => 'Día del Clima'],
            ['date' => '25-04-2023', 'icon' => 'fa-dna', 'description' => 'Día de la Genética'],
            ['date' => '12-07-2023', 'icon' => 'fa-cogs', 'description' => 'Día de la Robótica'],
            ['date' => '09-10-2023', 'icon' => 'fa-microchip', 'description' => 'Día de la Nanotecnología'],
            ['date' => '01-06-2023', 'icon' => 'fa-paw', 'description' => 'Día del Paleontólogo'],
        ];

        foreach ($special_days as $special) {
            if ($special['date'] == $day) {
                return $special;
            }
        }
        return '';
    }
    function show_days_month($month)
    {
        $number_days = cal_days_in_month(CAL_GREGORIAN, $month, '2023');
        echo '<div class="month">';

        //Add names day
        echo '<div class="day name_day">Monday</div>';
        echo '<div class="day name_day">Tuesday</div>';
        echo '<div class="day name_day">Wednesday</div>';
        echo '<div class="day name_day">Thursday</div>';
        echo '<div class="day name_day">Friday</div>';
        echo '<div class="day name_day">Saturday</div>';
        echo '<div class="day name_day">Sunday</div>';

        $number_spaces = get_spaces_before_day_1($month, 2023);
        //echo 'Spaces: '. $number_spaces. '('. $month.')<br>';
        for ($i = 0; $i < $number_spaces; $i++) {
            echo '<div class="day">';
            echo '</div>';
        }

        for ($day = 1; $day <= $number_days; $day++) {
            $complete_day = $day < 10 ? "0" . $day : $day;
            $special_day = get_specialday_from_day($complete_day . '-' . $month . '-2023');
            if ($special_day) {
                echo '<div class="day day_number special_day">';
            } else {
                echo '<div class="day day_number">';
            }
            echo '<p>' . $day . '</p>';
            if ($special_day) {
                echo '<i title="' . $special_day['description'] . '" class="icon_day fa ' . $special_day['icon'] . '"></i>';
            }
            echo '</div>';
        }
        echo '</div>';
    }

    function create_month($month)
    {
        if ($month < 10) {
            $month = '0' . $month;
        }
        $date = '2023-' . $month . '-01';
        $month_word = date('F', strtotime($date));
        echo "<h2>$month_word</h2>";

        //Mostrar tots els números del mes
        show_days_month($month);


    }

    for ($month = 1; $month <= 12; $month++) {
        create_month($month);
    }

    ?>
</body>

</html>
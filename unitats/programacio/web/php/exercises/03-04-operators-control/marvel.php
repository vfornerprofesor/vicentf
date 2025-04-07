<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            display: grid;
            column-gap: 20px;
            row-gap: 20px;
            justify-content: space-around;
            grid-template-columns: auto auto auto;
        }

        .superhero {
            width: 300px;
            background-color: khaki;
            text-align: center;
            padding: 10px;
        }

        #title {
            text-align: center;
            text-shadow: 2px 0 khaki, 0 2px khaki, -2px 0 khaki, 0 -2px khaki;
        }
    </style>
</head>

<body>
        <h1 id=title>Marvel superheroes</h1>
    <div class="container">

        <?php

        $superheroes = [
            [
                'name' => 'Spider-Man',
                'colors' => 'Red and Blue',
                'power' => 'Agility and strength, climbing walls, shooting webs',
                'image' => 'spiderman.png',
            ],
            [
                'name' => 'Iron Man',
                'colors' => 'Red and Gold',
                'power' => 'Powered armor providing superhuman strength, flight, advanced weaponry',
                'image' => 'ironman.png',
            ],
            [
                'name' => 'Captain America',
                'colors' => 'Red, White, and Blue',
                'power' => 'Peak human condition, expert in hand-to-hand combat, shield handling',
                'image' => 'capitanamerica.png',
            ],
            [
                'name' => 'Thor',
                'colors' => 'Red, Blue, and Silver',
                'power' => 'Superhuman strength, speed, durability, control over weather, flight',
                'image' => 'thor.png',
            ],
            [
                'name' => 'Hulk',
                'colors' => 'Green',
                'power' => 'Transformation into Hulk with extreme rage, immense superhuman strength',
                'image' => 'hulk.png',
            ],
            [
                'name' => 'Black Widow',
                'colors' => 'Black',
                'power' => 'Master martial artist, expert markswoman, espionage skills',
                'image' => 'blackwidow.png',
            ],
            [
                'name' => 'Doctor Strange',
                'colors' => 'Blue and Red',
                'power' => 'Mastery of the mystic arts, time manipulation, reality warping',
                'image' => 'doctorstrange.png',
            ],
            [
                'name' => 'Black Panther',
                'colors' => 'Black',
                'power' => 'Enhanced strength, speed, agility, and senses, Vibranium suit',
                'image' => 'blackpanther.png',
            ],
            [
                'name' => 'Wolverine',
                'colors' => 'Yellow and Blue',
                'power' => 'Regeneration, retractable adamantium claws, enhanced senses',
                'image' => 'wolverline.png',
            ],
            [
                'name' => 'Storm',
                'colors' => 'White',
                'power' => 'Control over weather and atmospheric phenomena',
                'image' => 'storm.png',
            ],
            [
                'name' => 'Ant-Man',
                'colors' => 'Red and Silver',
                'power' => 'Shrinking ability, control over ants, superhuman strength when enlarged',
                'image' => 'antman.png',
            ],
            [
                'name' => 'Scarlet Witch',
                'colors' => 'Red',
                'power' => 'Reality manipulation, energy projection, telekinesis',
                'image' => 'scarlettwitch.png',
            ],
            [
                'name' => 'Vision',
                'colors' => 'Red, Yellow, and Green',
                'power' => 'Android with superhuman strength, density manipulation, energy projection',
                'image' => 'vision.png',
            ],
            [
                'name' => 'Deadpool',
                'colors' => 'Red and Black',
                'power' => 'Regeneration, skilled marksman, breaking the fourth wall',
                'image' => 'deadpool.png',
            ],
            [
                'name' => 'Groot',
                'colors' => 'Brown',
                'power' => 'Floral colossus with the ability to regenerate and grow',
                'image' => 'groot.png',
            ],
            [
                'name' => 'Rocket Raccoon',
                'colors' => 'Brown and White',
                'power' => 'Genius-level intellect, expert marksman, mechanical skills',
                'image' => 'rocket.png',
            ],
            [
                'name' => 'Captain Marvel',
                'colors' => 'Red, Blue, and Gold',
                'power' => 'Superhuman strength, flight, energy absorption and projection',
                'image' => 'captainmarvel.png',
            ],
            [
                'name' => 'Falcon',
                'colors' => 'Red, White, and Silver',
                'power' => 'Flight, skilled hand-to-hand combatant, access to advanced technology',
                'image' => 'falcon.png',
            ],
            [
                'name' => 'Winter Soldier',
                'colors' => 'Black and Silver',
                'power' => 'Enhanced strength, expert marksman, bionic arm with various functions',
                'image' => 'wintersoldier.png',
            ],
            [
                'name' => 'Hawkeye',
                'colors' => 'Purple',
                'power' => 'Master archer, expert marksman, skilled hand-to-hand combatant',
                'image' => 'hawkeye.png',
            ],
        ];


        function createSuperhero($name, $colors, $power, $image)
        {
            echo '<div class="superhero">';
            echo '<h1>' . $name . '</h1>';
            echo '<img src="images/'. $image .'">';
            echo '<h2>Colors: ' . $colors . '</h2>';
            echo '<h3>Power: ' . $power . '</h3>';
            echo '</div>';
        }

        foreach ($superheroes as $s) {
            createSuperhero($s['name'], $s['colors'], $s['power'], $s['image']);
        }


        ?>
    </div>
</body>

</html>
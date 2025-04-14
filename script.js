const categories = {

    "MATH": [

    {
        "question": "How many positive real roots are there in the polynomial x^4-4x^3 + 7x-6x-18= 0.",
        "choices": ["1 or 2", "3 or 1", "3 or 0", "1 or 0"],
        "answer": "3 or 1"
    },
    {
        "question": "A transmitter with a height of 150m is located on top of a mountain which is 3.0km high. What is the furthest distance on the surface of the earth that can be seen from the top of the mountain? Take the radius of the earth to be 6400 km.",
        "choices": ["205km", "225km", "152km", "196km"],
        "answer": "196km"
    },
    {
        "question": "An object falls from rest in a medium offering resistance. The velocity of an object before the object reaches the bottom is given by the differential equation dV/dt + V/10 = 32, ft/sec. What is the velocity of the object one second after it falls?",
        "choices": ["40.54", "38.65", "30.45", "34.12"],
        "answer": "30.45"
    },
    {
        "question": "Find a general solution to the differential equation y\"-2y'+y= xex + 4, y(0)= 1,y'(0)=1",
        "choices": [
            "y=  ex+ xex-1/2exln(1+x²)+exarctanx",
            "y= -3ex+4xex+(1/6)x3ex+4",
            "Y= -3ex+4xex-2/3 xe-x-2/9e-x",
            "y=  excosx +exsinx + 1/3excosx lnlcosxl + 1/3 xe2xsinx"
        ],
        "answer": "y= -3ex+4xex+(1/6)x3ex+4"
    },
    {
        "question": "Water is running out a conical funnel at the rate of 1cu. in./s. the radius of the base of the funnel is 4in, and the altitude is 8in.,find the rate at which the water level is dropping when it is 2in, from the top.",
        "choices": ["- 1/9π in/s", "- 1/7π in/s", "- 17/6π in/s", "- 1/8π in/s"],
        "answer": "- 1/9π in/s"
    },
    {
        "question": "What is the radius of curvature at point (1, 2) of the curve 4x-y²= 0?",
        "choices": ["6.21", "5.66", "5.21", "6.66"],
        "answer": "5.66"
    },
    {
        "question": "Evaluate the integral of x°dx over(e^x- 1) limits from zero to infinity.",
        "choices": ["2(4pi-e)/3", "(pi^4)/15", "19-4pi", "(pi^2)/6"],
        "answer": "(pi^4)/15"
    },
    {
        "question": "Bobby is two years younger than twice as old as Ellen. The sum of two times the age of Bobby and three times the age of Ellen is 66. How old is Bobby?",
        "choices": ["10", "12", "18", "15"],
        "answer": "18"
    },
    {
        "question": "If z=6 e^mi/3 evaluate e^iz.",
        "choices": ["e^3isq root of 3", "e^-3sqroot of 3", "e^sq root of 3", "e^-sq root of 3"],
        "answer": "e^-3sqroot of 3"
    },
    {
        "question": "A circle with center at the origin has a radius of 5. Find the equation of a parabola opening to the right that has its vertex on the circle and crossing the points of intersection of the circle and y-axis.",
        "choices": ["5x + 25 = y^2", "5x - 25 = y^2", "5y + 55 = x^2", "5y - 25 = x^2"],
        "answer": "5x + 25 = y^2"
    },
    {
        "question": "A 20 ft light post casts a shadow 25 ft long. At the same time, a building nearby casts a shadow 50 ft long. How tall is the building?",
        "choices": ["62 ft", "94 ft", "40 ft", "10 ft"],
        "answer": "40 ft"
    },
    {
        "question": "What is the ratio of the sides of a triangle if the product of the sines of its angle is a maximum?",
        "choices": ["1:2:1", "1:3:3", "1:1:1", "1:1:2"],
        "answer": "1:1:1"
    },
    {
        "question": "Manuelita had 75 stuffed animals. Her grandmother gave fifteen of them to her. What percentage of the stuffed animals did her grandmother give her?",
        "choices": ["20%", "25%", "15%", "10%"],
        "answer": "20%"
    },
    {
        "question": "Find the orthogonal trajectories of the family of parabolas y^2=2× + C.",
        "choices": ["y=Ce^6", "y=Ce^(2x)", "y= Ce^(-x)", "y= Ce^(-2x)"],
        "answer": "y= Ce^(-x)"
    },
    {
        "question": "Bob is two years from being twice Ellen's age. The sum of twice Bob's age and trice of Elen's age is 66. How old is Ellen?",
        "choices": ["18", "10", "20", "15"],
        "answer": "10"
    },
    {
        "question": "A 6-ft pine tree is planted 15 feet from a lighted street light whose lamp is 18 ft above the ground. How many feet long is the shadow of the tree?",
        "choices": ["5.0", "7.8", "7.5", "9.6"],
        "answer": "7.5"
    },
    {
        "question": "Three sides of a trapezoid are each 10m long. How long must the fourth side be to make the area maximum?",
        "choices": ["20m", "52m", "50m", "45m"],
        "answer": "20m"
    },
    {
        "question": "Observer A and B are 53 km from each other. At an instant an airplane passes by, if the angles of elevation of A and B are 56' 18\" and 48' 26\" respectively, what is the distance of the plane from the ground?",
        "choices": ["33.41 km", "31.15 km", "34.11 km", "35.41 km"],
        "answer": "34.11 km"
    },
    {
        "question": "Joey will be x years old y years from now. How old is she now?",
        "choices": ["y-x", "x", "x-y", "y"],
        "answer": "x-y"
    },
    {
        "question": "Find the weight of the heaviest right circular cylinder that can be cut from a 100 kg solid iron shot.",
        "choices": ["50 kg", "86.6 kg", "75 kg", "57.7 kg"],
        "answer": "57.7 kg"
    },
    {
        "question": "Jenny flipped a coin three times and got heads each time. What is the probability that she gets heads on the fourth flip?",
        "choices": ["1", "0", "1/16", "1/2"],
        "answer": "1/2"
    },
    {
        "question": "A bus leaves Manila at 12NN for Baguio 250 km away travelling an average of 55 kph at the same time, another bus leaves Baguio for Manila travelling 65 kph. At what time will they meet?",
        "choices": ["3:25 PM", "4:25 PM", "2:05 PM", "3:05 PM"],
        "answer": "2:05 PM"
    },
    {
        "question": "One end of a 32 m ladder resting on a horizontal plane leans on a vertical wall. Assume the ladder to be pushed towards the wall at the rate of 2 m/min, how fast does the top of the ladder increase when the foot is 10m from the wall?",
        "choices": ["0.658 m/min", "0.865 m/min", "0.586 m/min", "0.568 m/min"],
        "answer": "0.658 m/min"
    },
    {
        "question": "If y=2x + sin 2x, find x when y' = 0.",
        "choices": ["3π/2", "2π/3", "π/2", "2π/3"],
        "answer": "π/2"
    },
    {
        "question": "Jun rows his banca across a river at 4 km/hr. What is the width of the river if he goes at a point 1/3 km downstream?",
        "choices": ["5.33 km", "2.25 km", "34.25 km", "0.5 km"],
        "answer": "5.33 km"
    },
    {
        "question": "What is the centroid of a semi-circular arc of radius R?",
        "choices": ["2R/π", "4R/π", "4R/3π", "3R/8"],
        "answer": "2R/π"
    },
    {
        "question": "A conic section whose eccentricity is equal to one is known as:",
        "choices": ["Circle", "Hyperbola", "Ellipse", "Parabola"],
        "answer": "Parabola"
      },
      {
        "question": "A 20 ft. lamp casts a 25ft. shadow. At the same time, a nearby building casts a 50ft shadow. How tall is the building?",
        "choices": ["50", "30", "80", "40"],
        "answer": "40"
      },
      {
        "question": "Find the differential equation of the family of lines passing through the origin.",
        "choices": ["ydx - xdy = 0", "ydx + xdy = 0", "xdx - ydy = 0", "xdy + ydx = 0"],
        "answer": "ydx - xdy = 0"
      },
      {
        "question": "Find the equation of the family of curves at every point of which the tangent line has a slope of 2y.",
        "choices": ["y = Ce^-2x", "y = Ce^2x", "y = Ce^-x", "y = Ce^x"],
        "answer": "y = Ce^2x"
      },
      {
        "question": "There are 125 persons to the field trip and each school bus holds 48 persons. What is the minimum number of school buses needed?",
        "choices": ["2", "4", "5", "3"],
        "answer": "3"
      },
      {
        "question": "If in the Fourier series of a periodic function, the coefficient a0 = 0, then it must be having ____ symmetry",
        "choices": ["odd", "even", "odd-quarter wave", "either A or B"],
        "answer": "either A or B"
      },
      {
        "question": "If the average person throws away 38.6 pounds of trash every day, how much trash would the average person throw away in one week?",
        "choices": ["281.3", "251", "270.2", "230"],
        "answer": "270.2"
      },
      {
        "question": "What is the conic section where eccentricity is less than 1?",
        "choices": ["parabola", "ellipse", "hyperbola", "Circle"],
        "answer": "ellipse"
      },
      {
        "question": "What is the probability that a randomly chosen point inside a circle with diameter 8 inches is at least 1.5 in away from the center?",
        "choices": ["⅝", "55/64", "5/46", "5/64"],
        "answer": "55/64"
      },
      {
        "question": "From past experience, it is known 90% of one year old children can distinguish their mother voice from the voice similar sounding female. A random sample of 20 one year old children are given this voice recognition test. Let the random variable x denote the number of children who do not recognize their mother’s voice. Find the probability that all 20 children recognize their mother’s voice.",
        "choices": ["0.345", "0.122", "0.4", "0.222"],
        "answer": "0.122"
      },
      {
        "question": "The area enclosed by the ellipse 4x² + 9y² = 36 is revolved about the line x = 3. What is the volume generated?",
        "choices": ["360.1", "355.3", "365.1", "370.3"],
        "answer": "355.3"
      },
      {
        "question": "An epidemic spreads at a rate jointly proportional to the number of infected and uninfected people. Starting with 160 out of 5000 infected, 1200 after a week, how many days until 80% infected?",
        "choices": ["15 days", "20 days", "18 days", "23 days"],
        "answer": "15 days"
      },
      {
        "question": "What is the probability that more than 15 alumni out of 20 make a contribution, given 80% chance each?",
        "choices": ["0.6296", "0.3014", "0.582", "0.4214"],
        "answer": "0.582"
      },
      {
        "question": "Find the standard deviation that all 20 children recognize their mother’s voice, given 90% recognition rate.",
        "choices": ["0.122", "1.222", "1.34", "1.43"],
        "answer": "1.34"
      },
      {
        "question": "What is the length of the shortest line that can be drawn tangent to x²/9 + y²/16 = 1 and meeting the coordinate axes?",
        "choices": ["5", "10", "7", "16"],
        "answer": "7"
      },
      {
        "question": "An arch is an inverted parabola with a span of 12 ft and height 12 ft. Find the vertical clearance 4 ft from the center.",
        "choices": ["7.33 ft", "6.00 ft", "5.33 ft", "6.67 ft"],
        "answer": "6.67 ft"
      },
      {
        "question": "Points A and B are 1000m apart. From A, bearing to tower C is 32°W of N; from B, bearing to C is 26°N of E. What is the shortest distance from tower C to the highway?",
        "choices": ["374 m", "770 m", "241 m", "1033 m"],
        "answer": "374 m"
      },
      {
        "question": "Three externally tangent circles have radii 3 cm, 4 cm, and 5 cm. Find the maximum angle formed by the triangle connecting the centers.",
        "choices": ["270°", "286.6°", "73.4°", "48.2°"],
        "answer": "73.4°"
      },
      {
        "question": "Find the general solution of y\" + 10y' + 41y = 0",
        "choices": [
          "y = e^-5x (C1 cos 4x + C2 sin 4x)",
          "y = e^5x (C1 cos 4x + C2 sin 4x)",
          "y = e^-4x (C1 cos 5x + C2 sin 5x)",
          "y = e^4x (C1 cos 5x + C2 sin 5x)"
        ],
        "answer": "y = e^-5x (C1 cos 4x + C2 sin 4x)"
      },
      {
        "question": "Two perpendicular chords intersect a circle. One is cut at 2 and 6, and the other at 3. Find the radius.",
        "choices": ["4", "3", "7", "5"],
        "answer": "4"
      },
      {
        "question": "Evaluate the limit of z² / (z⁴ + z + 1) as z approaches e^(πi/4)",
        "choices": ["1/3", "√2(1+i)/2", "4/3 - 4i", "-12 + 6i"],
        "answer": "√2(1+i)/2"
      },
      {
        "question": "For the equation x² + y² - 4x + 6y - 12 = 0, find the diameter.",
        "choices": ["6", "8", "10", "5"],
        "answer": "10"
      },
      {
        "question": "Find the area enclosed by r = a(1 - cosθ)",
        "choices": ["1.5πa²", "πa²/2", "2πa²", "πa²"],
        "answer": "1.5πa²"
      },
      {
        "question": "If 20 workers can fabricate 40 transistors in 8 hours, how many workers are needed to fabricate 960 transistors in a week?",
        "choices": ["80", "90", "100", "140"],
        "answer": "80"
      },
      {
        "question": "Carbon-14 has a half-life of 5600 years. What fraction remains after 10,000 years?",
        "choices": ["30%", "60%", "50%", "25%"],
        "answer": "30%"
      },
      {
        "question": "Evaluate: 12[cos45 + jsin45] + 3[cos15 + jsin15]",
        "choices": ["4√2 + j3", "2√3 + j2", "4√2 - j3", "√3 - j2"],
        "answer": "2√3 + j2"
      },
      {
        "question": "A cylindrical can is to have volume 1000 cubic centimeters. Determine the radius which will minimize the amount of material to be used.",
        "choices": ["6.42", "7.24", "5.42", "4.25"],
        "answer": "5.42"
      },
      {
        "question": "It represents the distance of a point from the y-axis.",
        "choices": ["abscissa", "coordinate", "ordinate", "polar distance"],
        "answer": "abscissa"
      },
      {
        "question": "Find the equation x = y = z that is equidistant from (3, 0, 5) and (1,-1,4).",
        "choices": ["(1,1,1)", "(2,2,2)", "(3,3,3)", "(4, 4,4)"],
        "answer": "(2,2,2)"
      },
      {
        "question": "Find the parametric equations for the line through the point (1,7,2) that is parallel to the plane x + y + z = 10 and perpendicular to the line x = 3 + t, y = -18 - t, z = 5t.",
        "choices": ["x=6t-1,y=4t-7,z=-2t-2", "x=4t+1,y=-6t+7,z=2t+2", "x=6t+1,y=-4t+7,Z=-2t+2", "x=4t+1,y=-6t,z=2t+2"],
        "answer": "x=6t+1,y=-4t+7,Z=-2t+2"
      },
      {
        "question": "Find the volume generated by revolving the area bounded by y² = 12x and x = 3, about the line x = 3.",
        "choices": ["131", "191", "181", "151"],
        "answer": "181"
      },
      {
        "question": "A tank initially holds 100 gal of salt solution in which 50 lbs. of salt has been dissolved. A pipe fills the tank with brine at the rate of 3 gpm containing 2 lbs. of dissolved salt per gallon. Assuming that the mixture is kept uniform by stirring, a drain pipe draws out of the tank the mixture of 2 gpm. Find the amount of salt in the tank at the end of 30 minutes.",
        "choices": ["171.24 lbs.", "124.11 lbs.", "143.25 lbs", "105.22 lbs."],
        "answer": "171.24 lbs."
      },
      {
        "question": "Find the volume of a cube having its two faces laid in the planes 2x - y + 2z - 3 = 0 and 6x - 3y + 6z + 8 = 0.",
        "choices": ["564/729", "546/729", "4319/729", "4913/729"],
        "answer": "4913/729"
      },
      {
        "question": "Three randomly chosen senior high school students were administered a drug test. Each student was evaluated as positive to the drug test (P) or negative to the drug test (N). Assume the possible combinations of the three student Drug test evaluations as PPP, PPN, PNP, NPP, PNN, NPN,NNP, NNN. Assuming each possible combination is equally likely. What is the probability that at least one student gets negative results?",
        "choices": ["4/8", "2/7", "7/8", "3/7"],
        "answer": "7/8"
      },
      {
        "question": "Which of the formulas below is incorrect?",
        "choices": ["cos2θ = 2cos²θ-1", "c² = a² + b² - 2abcosc", "sin²θ = 1 - 2sin²θ", "sec²θ = tan²θ + 1"],
        "answer": "sin²θ = 1 - 2sin²θ"
      },
      {
        "question": "What curve is described by the equation 4x² - y² + 8x + 4y = 15",
        "choices": ["Hyperbola", "Parabola", "Circle", "Ellipse"],
        "answer": "Hyperbola"
      },
      {
        "question": "What is the curve described by the equation Ln|Z - i| = 2?",
        "choices": ["Ellipse", "Hyperbola", "Circle", "Parabola"],
        "answer": "Circle"
      },
      {
        "question": "Calculate the volume of the solid formed by revolving the area bounded by the parabola y² = 12x and the line x = 3 about the line x = 3",
        "choices": ["181", "151", "131", "191"],
        "answer": "181"
      },
      {
        "question": "Bert cuts a piece of rope into three pieces. One piece is 8 inches long, one piece is 7 inches long, and one piece is 5 inches long. The shortest piece of rope is approximately what percent of the original length before the rope was cut?",
        "choices": ["25", "16", "10", "20"],
        "answer": "25"
      },
      {
        "question": "A statue 3m high is standing on a base of 4m high. If an observer’s eye is 1.5m above the ground how far should he stand from the base in order that the angle subtended by the statue is a maximum?",
        "choices": ["3.41", "3.51", "3.71", "4.41"],
        "answer": "3.71"
      },
      {
        "question": "The axis of hyperbola which is parallel to its directrices is known as",
        "choices": ["Major axis", "Conjugate axis", "Transverse axis", "Minor axis"],
        "answer": "Conjugate axis"
      },
      {
        "question": "Find the area of the first octant part of the plane x/a + y/b + z/c = 1, where a, b, and c are positive.",
        "choices": ["square root of (a+b+c)", "a + b + c", "½ square root of (a²b² + b²c² + a²c²)", "square root of (a² + b² + c²)"],
        "answer": "½ square root of (a²b² + b²c² + a²c²)"
      },
      {
        "question": "Compute log(3 - 2i)",
        "choices": ["0.2575 - 0.3545i", "0.7580 + 0.7580i", "0.5570 - 0.2554i", "1.6575 + 0.8554i"],
        "answer": "0.5570 - 0.2554i"
      },
      {
        "question": "From past experience, it is known 90% of one year old children can distinguish their mother voice from the voice similar sounding female. A random sample of 20 one year old children are given this voice recognition test. Let the random variable x denote the number of children who do not recognize their mother’s voice. Find the probability that at least three Children do not recognize their mother’s voice.",
        "choices": ["0.433", "0.5", "0.323", "0.222"],
        "answer": "0.323"
      },
      {
        "question": "Evaluate (1+i)^(1-i)",
        "choices": ["-2.82 + 1.32i", "2.82 - 1.32i", "-2.82 - 1.32i", "2.82 + 1.32i"],
        "answer": "2.82 + 1.32i"
      },
      {
        "question": "Sand is pouring to form a conical pile such that its altitude is always twice its radius. If the volume of a conical pile is increasing at a rate of 25π cu. ft./min., how fast is the radius increasing when the radius is 5 ft.?",
        "choices": ["0.5 ft/min", "5 ft/min", "5π ft/min.", "0.5π ft/min."],
        "answer": "0.5 ft/min"
      },
      {
        "question": "The cable of suspension bridge hangs in the form of a parabola when the load is uniformly distributed horizontally. The distance between towers is 150m, the points of the cable on the towers are 22m above the roadway, and the lowest point on the cable is 7m above roadway. Find the vertical distance to the cable from a point in the roadway 15m from the foot of tower.",
        "choices": ["16.6m", "12.8m", "9.6m", "18.8m"],
        "answer": "16.6m"
      },
      {
        "question": "Three randomly chosen senior hig school students were administered a drug test. Each student was evaluated as positive to the drug test (P) or negative to the drug test (N). Assume the possible combinations of the three student Drug test evaluations as PPP, PPN, PNP, NPP, PNN, NPN, NNP, NNN. Assuming each possible combination is equally likely, what is the probability that all three students get positive results?",
        "choices": ["⅛", "⅞", "⅓", "⅔"],
        "answer": "⅛"
      },
      {
        "question": "Find the equation of the family of orthogonal trajectories of the system of parabolas y² = 2x + C",
        "choices": ["y = Ce^-2x", "y = Ce^2x", "y = Ce^x", "y = Ce^-x"],
        "answer": "y = Ce^-x"
      },
      {
        "question": "From the base of a building, the angle of elevation to the top of a 4.0m vertical pole a distance away is 18°50′. From the top of the building, the angle of depression of the base of the pole is 48°10′. Find the height of the building.",
        "choices": ["12.1m", "11.1m", "13.1m", "10m"],
        "answer": "13.1m"
      },
      {
        "question": "A sinking ship makes a distance signal seen by three observers all 20m inland from the shore. First observer is perpendicular to the ship, second observer 100m to the right of the first observer and the third observer is 125m to the right of the first observer. How far is the ship from the shore?",
        "choices": ["80m", "120m", "60m", "100m"],
        "answer": "80m"
      },
      {
        "question": "Identify the curve | z-3i|-|z+3i|=4",
        "choices": ["Ellipse", "Circle", "Line", "Hyperbola"],
        "answer": "Hyperbola"
    },
    {
        "question": "A chord of a circle of a diameter 10 ft is decreasing in length 1 ft/min. Find the rate of change of the smaller arc subtended by the chord when the chord is 8 ft. long.",
        "choices": ["3/5 ft/min", "5/3 ft/min", "3 ft/min", "5 ft/min"],
        "answer": "5/3 ft/min"
    },
    {
        "question": "Find a general solution to the differential equation y\" -2y'+y=xex + 4, y(0)=1, y'(0)=1",
        "choices": [
            "y = ex + xex - 1/2ex ln(1+x²) + ex arctanx",
            "y = -3ex + 4xex + (1/6)x3e^x + 4",
            "y = -3ex + 4xex - 2/3 xe-x - 2/9e-x",
            "y = e^x cosx + e^x sinx + (1/e) cosx ln|cosx| + x e2x sinx"
        ],
        "answer": "y = -3ex + 4xex + (1/6)x3e^x + 4"
    },
    {
        "question": "A normal to a given plane is",
        "choices": ["Oblique to the plane", "Parallel to the plane", "Perpendicular to the plane", "Lying in the plane"],
        "answer": "Perpendicular to the plane"
    },
    {
        "question": "What is the curve described by the equation Im(z²) = 4?",
        "choices": ["Ellipse", "Circle", "Line", "Hyperbola"],
        "answer": "Hyperbola"
    },
    {
        "question": "Find the area in a single hump of a cycloid given by the parametric equation: x = a(θ - sinθ), y = a(1 - cosθ)",
        "choices": ["3πa²", "πa²/8", "Πa²", "3πa²/8"],
        "answer": "3πa²"
    },
    {
        "question": "If z = 6e^(iπ/3), evaluate e^(iz)",
        "choices": ["e^3√3", "e^-3√3", "e^√3", "e^-√3"],
        "answer": "e^-3√3"
    },
    {
        "question": "In an ellipse, a chord which contains a focus and is in a line perpendicular to the major axis is a",
        "choices": ["Conjugate axis", "Latus rectum", "Focal width", "Minor axis"],
        "answer": "Latus rectum"
    },
    {
        "question": "A man on an observation sees a fire directly south of him. A boy on another tower 20 km east of the first tower observes the fire at a bearing S40°15’W. What is the distance of the first tower from the fire?",
        "choices": ["24.1km", "25.78km", "26.20km", "23.62 km"],
        "answer": "23.62 km"
    },
    {
        "question": "Solve the differential equation: y\" - 4y' + 3y = sin x.",
        "choices": [
            "y(x) = C1 e^3x + C2 e^x + 1/5 cos x + 1/10 sin x",
            "y(x) = C1 e^3x + C2 e^x sin x",
            "y(x) = C1 sin 3x + C2 x + cos 3x",
            "y(x) = C1 sin x + C2 x + 1/10 sin x"
        ],
        "answer": "y(x) = C1 e^3x + C2 e^x + 1/5 cos x + 1/10 sin x"
    },
    {
        "question": "_____ circles are circles that have the same size.",
        "choices": ["Eccentric", "Congruent", "Concyclic", "Concentric"],
        "answer": "Congruent"
    },
    {
        "question": "The locus of a point which moves so that its distance from a fixed point and a fixed line is always equal is",
        "choices": ["Ellipse", "Circle", "Parabola", "Hyperbola"],
        "answer": "Parabola"
    },
    {
        "question": "When the discriminant of a conic section, D = B² - 4AC = 1, the curve is a",
        "choices": ["Ellipse", "Circle", "Parabola", "Hyperbola"],
        "answer": "Hyperbola"
    },
    {
        "question": "A point where the concavity of a curve changes or when the slope of the curve is neither increasing nor decreasing is known as",
        "choices": ["Point of tangency", "Inflection point", "Slope point", "Maximum point"],
        "answer": "Inflection point"
    },
    {
        "question": "Find the orthogonal trajectories of the family of parabolas y² = 2x + C.",
        "choices": ["y = Ce^6", "y = Ce^(2x)", "y = Ce^(-x)", "y = Ce^(-2x)"],
        "answer": "y = Ce^(-x)"
    },
    {
        "question": "What is the curve described by the equation Im(z^2) = 4?",
        "choices": ["Ellipse", "Parabola", "Hyperbola", "Circle"],
        "answer": "Hyperbola"
    },
    {
        "question": "What is the shape of the graph of r = a + bcosθ?",
        "choices": ["Lemniscate", "Rose", "Limacon", "Cardioid"],
        "answer": "Limacon"
    },
    {
        "question": "The rectangular coordinate system in space is divided in eight compartments, which are known as:",
        "choices": ["Quadrants", "Octants", "Axis", "Coordinates"],
        "answer": "Octants"
    },
    {
        "question": "Find the unit vector which is orthogonal to 9i +9j and 9i + 9k.",
        "choices": ["(i-j-k)/sq.rt.of3", "(i+j+k)/sq.rt.of3", "(i-j+k)/sq.rt.of3", "(i+j-k)/sq.rt.of3"],
        "answer": "(i-j-k)/sq.rt.of3"
    },
    {
        "question": "From past experience, it is known that 90% of one-year-old children can distinguish their mother's voice from the voice of a similar sounding female. A random sample of 20 one year-old children are given this voice recognition test. Let the random variable x denote the number of children who do not recognize their mother's voice. Find the variance.",
        "choices": ["2", "1.8", "4.2", "1.5"],
        "answer": "1.8"
    },
    {
        "question": "The cost per hour of running a boat is proportional to the cube of the speed of the boat. At what speed will the boat run against a current of 4 kph in order to go a given distance most economically?",
        "choices": ["10 kph", "8 kph", "6 kph", "15 kph"],
        "answer": "6 kph"
    },
    {
        "question": "What is the length of the shortest line segment in the first quadrant drawn tangent to the ellipse b^2 x^2 + a^2 y^2 = a^2 b^2 and meeting the coordinate axes?",
        "choices": ["a^2+b^2", "sqrt (a^2+b^2)", "a+b", "Y2 sqrt (a^2+b^2)"],
        "answer": "a+b"
    },
    {
        "question": "A steel girder 8 m long is moved on rollers along a passage 4 m wide and into a corridor at right angles to the passageway. Neglecting the width of the girder, how wide must the corridor be?",
        "choices": ["2.0 m", "1.8 m", "2.4 m", "3.6 m"],
        "answer": "1.8 m"
    },
    {
        "question": "Joseph gave 1/4 of his candies to Joy and Joy gave 1/5 of what he got to Tim. If Tim received 2 candies, how many candies did Joseph have originally?",
        "choices": ["50", "20", "30", "40"],
        "answer": "40"
    },
    {
        "question": "Obtain the differential equation of the family of circles with the center on the y-axis",
        "choices": [
            "(y’)^3 - xy” + y’ = 0",
            "xy” - (y’)^3 - y’ = 0",
            "y” - xyy” + y’ = 0",
            "(y’)^3 + (y”)^2 + xy = 0"
        ],
        "answer": "(y’)^3 - xy” + y’ = 0"
    },
    {
        "question": "What is the centroid of a semi-circular area of radius R?",
        "choices": ["2R/π", "4R/π", "4R/3π", "3R/8"],
        "answer": "4R/3π"
    },
    {
        "question": "What is the centroid of a hemisphere radius R?",
        "choices": ["2R/π", "4R/π", "4R/3π", "3R/8"],
        "answer": "3R/8"
    },
    {
        "question": "Melinda and Joaquin can restock and aisle at the supermarket in one hour working together. Melinda can restock an aisle in 1.5 hours working alone, and it takes Joaquin two hours to restock an aisle. If they work together for two hours, and then work separately for another two hours, how many aisles will they have completed?",
        "choices": ["4", "4.33", "3", "5"],
        "answer": "4.33"
    },
    {
        "question": "Two stones are 1 mile apart and are at the same level as the foot of a hill. The angles of depression of the two stones viewed from the top of the hill are 5 deg. And 15 deg. Respectively. Find the height of the hill.",
        "choices": ["200.1m", "209.01m", "221.3m", "210.6m"],
        "answer": "209.01m"
    },
    {
        "question": "There are a set of triplets. If there are 11 generations, how many ancestors do they have if duplication is not allowed?",
        "choices": ["4095", "59049", "4085", "4064"],
        "answer": "4095"
    },
    {
        "question": "Sand is being poured into a conical pile in such a way that the height is always ⅓ of the radius. At what rate is sand being added to the pile when it is 4ft high if the height is increasing at 2 in/min.",
        "choices": ["30.288.13 in3/min", "100,132.88 in3/min", "130,288.13 in3/min", "53,288.13 in3/min"],
        "answer": "130,288.13 in3/min"
    },
    {
        "question": "Which of the following differential equations describes a family of circles centered at the y-axis?",
        "choices": ["xy’’ - (y’)^3 + y’ = 0", "xy’’ - (y’)^3 - y’ = 0", "xy’’ + (y’)^3 - y’ = 0", "xy’’ + (y’)^3 + y’ = 0"],
        "answer": "xy’’ - (y’)^3 - y’ = 0"
    },
    {
        "question": "Find the moment of inertia of the area bounded by the parabola y^2 = 4x and the line x = 1, with respect to the x-axis.",
        "choices": ["3.333", "2.133", "1.333", "4.133"],
        "answer": "2.133"
    },
    {
        "question": "Joy is 10% taller than Joseph and Joseph is 10% taller than Tom. How many percent is joy taller than Tom?",
        "choices": ["20", "18", "25", "21"],
        "answer": "21"
    },
    {
        "question": "If the fourier coefficient bn of a periodic function is zero, then it must posses____ symmetry.",
        "choices": ["either A or B", "odd", "even quarter-wave", "even"],
        "answer": "either A or B"
    },
    {
        "question": "Evaluate the double integral of 1/ (x - y) dx dy with inner bounds of 2y to 3y and outer bounds of 0 to 2.",
        "choices": ["ln8", "ln3", "ln2", "ln4"],
        "answer": "ln4"
    },
    {
        "question": "Donations were made by alumni for a school to fund a new computer room. Data shows that 80% of the alumni give at least P50, If the administration contacts 20 alumni, what is the probability that less than 17 of them will give at least p50?",
        "choices": ["0.379", "0.746", "0.164", "0.589"],
        "answer": "0.589"
    },
    {
        "question": "What is the area bounded by the parabola x^2 = 8y and its latus rectum?",
        "choices": ["8/3", "16/3", "32/3", "64/3"],
        "answer": "32/3"
    },
    {
        "question": "A stone is thrown into still water and causes ripples. The radius of the ripples increases at the rate of 12 in/s. At what rate does the area of the ripple increase in sq. in/s when its radius is 3 inches?",
        "choices": ["390.5", "226.19", "275.6", "402.55"],
        "answer": "226.19"
    },
    {
        "question": "Find the area of the ellipse 4x^2 + 9y^2 = 36?",
        "choices": ["18.85", "21.99", "20.3", "12.57"],
        "answer": "18.85"
    },
    {
        "question": "Find |u x v| correct to three decimal places where |u| = 9, |v| = 3, theta = 85 degrees.",
        "choices": ["31.897", "26.897", "2.353", "2.969"],
        "answer": "26.897"
    },
    {
        "question": "A post office can accept for mailing only if the sum of its length and its girth (the circumference of its cross section) is at most 100in. What is the maximum volume of a rectangular box with square cross section that can be mailed?",
        "choices": ["2,592.25 cu. In.", "9,259.26 cu. In.", "5,432.32 cu. In.", "1,845.24 cu. In."],
        "answer": "9,259.26 cu. In."
    },
    {
        "question": "If tan A = ⅓ and cot B = 4 find tan ( A+B )",
        "choices": ["7/11", "12/7", "7/12", "11/7"],
        "answer": "7/11"
    },
    {
        "question": "Determine the differential equation of the family of lines passing through (h,k)",
        "choices": ["(y-h) + (y - k) = dy/dx", "(y-k)dx - (x-h)dy = 0", "(x+h)dx - (y-k)dy = 0", "(x-h)dx - (y-k)dy = 0"],
        "answer": "(y-k)dx - (x-h)dy = 0"
    },
    {
        "question": "Find the area of the polygon with vertices at 2+3i, 3+i, -2-4i, -4-i, -1+2i.",
        "choices": ["55/2", "45/2", "47/2", "57/2"],
        "answer": "47/2"
    },
    {
        "question": "What is the angle subtended in mils of an arc length of 10 yards in a circle of radius 5000 yards?",
        "choices": ["2.4", "4.02", "2.04", "4.2"],
        "answer": "2.04"
    },
    {
        "question": "Find the volume generated by revolving the circle x^2 + y^2 + 6x + 4y + 12 = 0",
        "choices": ["65.55", "59.22", "22.58", "55.28"],
        "answer": "59.22"
    },
    {
        "question": "Solve the equation y’ = y/2x.",
        "choices": ["y = cx^2", "y^2 = cx", "y^2 = cx^3", "y = cx"],
        "answer": "y^2 = cx"
    },
    {
        "question": "Find the equation of the family of orthogonal trajectories of the system of parabolas y^2= 2x+ C",
        "choices": ["y=Ce^x", "y=Ce^-x", "y=Ce^2x", "y=Ce^-2x"],
        "answer": "y=Ce^-x"
    },
    {
        "question": "Michael’s favorite cake recipe calls for 0.75 lbs of flour; he has a 5 lbs bag. He wants to make several cakes for the school bake sale. How many cakes can he make?",
        "choices": ["6", "8", "5", "7"],
        "answer": "6"
    }



	    
],





  "ESAS": [


],





  "EE": [


],





};



let questionPool = [];
let currentQuestionIndex = 0;

const menuContainer = document.getElementById("menu-container");
const quizContainer = document.getElementById("quiz-container");
const categoryTitle = document.getElementById("category-title");
const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");
        startQuiz(selectedCategory);
    });
});

function startQuiz(category) {
    questionPool = [...categories[category]];
    questionPool = shuffleArray(questionPool);
    currentQuestionIndex = 0;

    categoryTitle.textContent = category;
    menuContainer.style.display = "none";
    quizContainer.style.display = "block";

    /* ✅ **Added Fade-in Effect for the Quiz Section** ✅ */
    quizContainer.style.opacity = "0";
    setTimeout(() => { quizContainer.style.opacity = "1"; }, 100);

    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function loadQuestion() {
    if (questionPool.length === 0) {
        questionElement.textContent = "🎉 REFRESH MO LANG PARA MAULIT MAY BUG KASI YUNG RESTART BUTTON HAHA 🎉";
        choicesContainer.innerHTML = "";
        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";

     
        quizContainer.classList.add("celebrate");
        setTimeout(() => quizContainer.classList.remove("celebrate"), 2000);

        return;
    }

    const currentQuestion = questionPool[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => handleChoice(button, choice, currentQuestion.answer));

        /* ✅ **Smooth Button Click Effect** ✅ */
        button.style.transition = "transform 0.2s ease";
        button.addEventListener("mousedown", () => button.style.transform = "scale(0.95)");
        button.addEventListener("mouseup", () => button.style.transform = "scale(1)");

        choicesContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

const wrongSound = new Audio('wrong1.mp3'); // Ensure "wrong.mp3" is in your project folder

function handleChoice(button, selected, correct) {
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add("correct");
		btn.style.boxShadow = "0 0 10px #28a745";
        } else if (btn.textContent === selected) {
            btn.classList.add("incorrect");
		btn.style.animation = "shake 0.3s ease-in-out";
            wrongSound.play(); // Play sound when answer is incorrect
        }
    });

    if (selected === correct) {
        questionPool.splice(currentQuestionIndex, 1); // Remove question if answered correctly
    } else {
        questionPool.push(questionPool[currentQuestionIndex]); // Add question back to the pool if answered incorrectly
        questionPool.splice(currentQuestionIndex, 1); // Remove current question from this round
    }

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    /* ✅ **Added Smooth Transition Between Questions** ✅ */
    quizContainer.style.opacity = "0";
    setTimeout(() => {
        loadQuestion();
        quizContainer.style.opacity = "1";
    }, 300);
});

restartButton.addEventListener("click", () => {
    // ✅ Reset Everything Like a Fresh App Start
    menuContainer.style.display = "block"; // Show menu again
    quizContainer.style.display = "none"; // Hide quiz
    quizContainer.classList.remove("celebrate");

    // ✅ Reset Buttons and UI
    nextButton.style.display = "none";  // Hide Next button initially
    restartButton.style.display = "none";  // Hide Restart button

    // ✅ Reload Question Pool to Start Fresh
    questionPool = []; // Clear old questions
    currentQuestionIndex = 0; // Reset index

    // ✅ Reload Category Selection to Restart Properly
    document.querySelectorAll(".category").forEach(button => {
        button.addEventListener("click", () => {
            const selectedCategory = button.getAttribute("data-category");
            startQuiz(selectedCategory);
        });
    });
});

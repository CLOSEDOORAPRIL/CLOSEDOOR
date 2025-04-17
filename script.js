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
        "question": "An epidemic spread at a rate jointly proportional to the number of infected people and the number of uninfected people. In an isolated town of 5000 inhabitants, 160 people have the disease at the beginning of the week and 1200 have it at the end of the week. How many days does it take for 80% of the population to become infected?",
        "choices": ["15 days", "20 days", "18 days", "23 days"],
        "answer": "15 days"
      },
      {
        "question": "A statistics department is contacting alumni by telephone asking for donations to help fund a new computer laboratory. Past history shows that 80% of the alumni contacted in this manner will make a contribution of at least P 50.000. A random sample of 20 alumni is selected. What is the probability that more than 15 alumni will make a contribution of at least p50.00?",
        "choices": ["0.6296", "0.3014", "0.582", "0.4214"],
        "answer": "0.6296"
      },
      {
        "question": "From past experience, it is known that 90% of one-year-old children can distinguish their mother's voice from the voice of a similar sounding female. A random sample of 20 one year-old children are given this voice recognition test. Find the standard deviation that all 20 children recognize their mother’s voice.",
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
        "question": "Carbon - 14 is a radioactive isotope of carbon that has a half life of 5600 years, it is used extensively in dating organic material that is tens of thousands of years old. What fraction of the original amount of Carbon - 14 in a sample would be present after 10,000 years?",
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
        "answer": "xy” - (y’)^3 - y’ = 0"
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
    },
    {
        "question": "Find the radius of curvature of the parabola y^2 = 4x at point P(4,4)?",
        "choices": ["22.36", "20.36", "27.36", "25.36"],
        "answer": "22.36"
    },
    {
        "question": "A ball bounces ⅔ of the altitude from which it falls. If it is dropped from a height of 18ft, what distance has it travelled until the 5th time it hit the ground?",
        "choices": ["75.78ft", "116.67ft", "79.33ft", "66.67ft"],
        "answer": "75.78ft"
    },
    {
        "question": "From the past experience, it is known 90% of one year old children can distinguish their mother voice of a similar sounding female. A random sample of 20 one year olds are given this voice recognition test. Let the random variable x denote the number of children who do not recognize their mother’s voice. Find the mean of x.",
        "choices": ["1", "20", "2", "5"],
        "answer": "2"
    },
    {
        "question": "A cylindrical container open at the top with minimum surface area at a given volume. What is the relationship of its radius to height?",
        "choices": ["radius = 3 height", "radius = 2 height", "radius = height", "radius = height / 2"],
        "answer": "radius = height"
    },
    {
        "question": "What is the value of x in arctan(2x) + arctan(x) = pi/4?",
        "choices": ["1.78", "-0.28 and 1.78", "0.28 and -1.78", "0.28"],
        "answer": "0.28"
    },
    {
        "question": "Find the minimum distance from the point P(4,2) to the parabola y^2 = 8x",
        "choices": ["3 sqrt. Of 2", "2 sqrt. Of 3", "3 sqrt. Of 3", "2 sqrt. Of 2"],
        "answer": "2 sqrt. Of 2"
    },
    {
        "question": "A statistics department is contacting alumni by telephone asking for donations to help fund a new computer laboratory. Past history shows that 80% of the alumni contacted in this manner will make a contribution of at least p50.00. A random sample of 20 alumni is selected. What is the probability that more than 15 alumni will make a contribution of at least p50.00?",
        "choices": ["0.6296", "0.3014", "0.582", "0.4214"],
        "answer": "0.6296"
    },
    {
        "question": "Liza thought she had the exact money to buy 10 chocolate bars. However, the price per bar had increased by 50 centavos. Consequently, she was able to buy only 8 bars and had p2 left. How much money did Liza have?",
        "choices": ["80", "40", "60", "30"],
        "answer": "30"
    },
    {
        "question": "What percentage of the volume of a cone is the maximum volume right cylindrical that can be inscribed in?",
        "choices": ["54%", "44%", "34%", "24%"],
        "answer": "44%"
    },
    {
        "question": "The area in the second quadrant of the circle x^2 + y^2 = 36 is revolved about the line y + 10 = 0. What is the volume generated?",
        "choices": ["2228.3", "2233.48", "2208.53", "2218.33"],
        "answer": "2228.3"
    },
    {
        "question": "The locus of a point which moves so that its distance from a fixed point and a fixed line is always equal is",
        "choices": ["circle", "hyperbola", "ellipse", "parabola"],
        "answer": "parabola"
    },
    {
        "question": "Solve (x+y) dy = (x-y)dx",
        "choices": ["x^2 - 2xy + y^2 = C", "x^2 - 2xy - y^2 = C", "x^2 + y^2 = C", "x^2 + 2xy + y^2 = C"],
        "answer": "x^2 - 2xy - y^2 = C"
    },
    {
        "question": "A cylindrical can is to have volume 1000 cubic centimeters. Determine the height which will minimize the amount of material to be used.",
        "choices": ["12.84cm", "11.84cm", "10.64cm", "10.84cm"],
        "answer": "10.84cm"
    },
    {
        "question": "Evaluate the integral of square root of (1-cos x)dx",
        "choices": ["-2 square root of 2 cos x + C", "2 square root of 2 cos x + C", "2 square root of 2 cos x/2 + C", "-2 square root of 2 cos x/2 + C"],
        "answer": "-2 square root of 2 cos x/2 + C"
    },
    {
        "question": "If the coefficient a0 of a fourier series of a periodic function of zero, it means that the function has",
        "choices": ["odd symmetry or even quarter wave symmetry or odd-quarter wave symmetry", "Odd-quarter wave symmetry", "Even quarter wave symmetry", "Odd symmetry"],
        "answer": "odd symmetry or even quarter wave symmetry or odd-quarter wave symmetry"
    },
    {
        "question": "Two engineers facing each other with a distance of 5km from each other, the angles of elevation of the balloon from the two engineers are 56 deg. And 58 deg., respectively. What is the distance of the balloons?",
        "choices": ["4.64km, 4.44km", "4.64km, 4.54km", "4.54km, 4.44km", "4.44km, 4.74km"],
        "answer": "4.64km, 4.54km"
    },
    {
        "question": "If the side of a square can be expressed as a^2bcube, what is the area of the square in simplified form?",
        "choices": ["a^2b to the 6th power", "a^4b to the 6th power", "a^4b to the 5th power", "a^2b to the 5th power"],
        "answer": "a^4b to the 6th power"
    },
    {
        "question": "Determine the correct equation for the line with a slope of 7 and y intercept of -4",
        "choices": ["y= -1/7x-4", "y=7x-4", "y=7x+4", "y=-7x+4"],
        "answer": "y=7x-4"
    },
    {
        "question": "Find the maximum value of 3^sin3x",
        "choices": ["⅓", "s", "1", "3"],
        "answer": "3"
    },
    {
        "question": "Hotels, like airlines, often overbook, counting on the fact that some people with reservations will cancel at the last minute. A certain hotel chain finds 20% of the reservation will not be used. If four reservations are made, what is the chance fewer than two will cancel?",
        "choices": ["0.3825", "0.7241", "0.5211", "0.8192"],
        "answer": "0.8192"
    },
    {
        "question": "After the price of gasoline went up by 10%, a consumer reduced his consumption by the same percent. By what percent would his gasoline bill be changed?",
        "choices": ["1%", "10%", "11%", "0.1%"],
        "answer": "1%"
    },
    {
        "question": "The length of the latus rectum of the parabola y^2 = 4px is:",
        "choices": ["p", "2p", "4p", "-4p"],
        "answer": "4p"
    },
    {
        "question": "Find the weight of the heaviest right circular cylinder that can be cut from a 100 kg solid iron shot",
        "choices": ["50 kg", "86.6 kg", "75 kg", "57.7 kg"],
        "answer": "57.7 kg"
    },
    {
        "question": "Find the distance of the centroid of an ellipse with equation (x/a)^2 +(y/b)^2 = 1 with respect to the major axis.",
        "choices": ["2b/π", "4b/3π", "4a/3π", "0"],
        "answer": "0"
    },
    {
        "question": "A canoe can travel 3 times as fast downstream than it can upstream. If the current of the stream is 5 mph. If the time to make the roundtrip is 4 hours, find the total distance travelled by the canoe?",
        "choices": ["30 miles", "15 miles", "40 miles", "60 miles"],
        "answer": "30 miles"
    },
    {
        "question": "A company hired 30 new employees today. It increases their workforce by 5%. How many new workers now?",
        "choices": ["610", "600", "630", "620"],
        "answer": "630"
    },
    {
        "question": "Find the dimension of the largest rectangle that can be inscribed in the right triangle with sides lying along the hypotenuse of triangle with legs 60m and 80m",
        "choices": ["20m x 70m", "24m x 50m", "30m ×40m", "35m x 50m"],
        "answer": "24m x 50m"
    },
    {
        "question": "The towers of a parabolic suspension bridge 300 m long are 60 m high and the lowest point of the cable is 20 m above the roadway. Find the vertical distance from the roadway to the cable at 100 m from the center.",
        "choices": ["17.78 m", "37.78 m", "12.86 m", "32.86 m"],
        "answer": "37.78 m"
    },
    {
        "question": "What is the eccentricity, e of a conic section with discriminant B² - 4AC = 0?",
        "choices": ["e=0", "e<1", "e>1", "e=1"],
        "answer": "e=1"
    },
    {
        "question": "Find the general solution of (D² + 4)y = 0",
        "choices": ["y=C1e2x+C2e-2x", "y=C1e2x+C2xe-2x", "y=C1 sin2x + C2cos2x", "y=C1e2xsin2x +C2e-2xcos2x"],
        "answer": "y=C1 sin2x + C2cos2x"
    },
    {
        "question": "Write the equation of a line with x-intercept, a = 8 and y-intercept, b = -1.",
        "choices": ["×-8y-8=0", "8x+y-8=0", "8x-y+8=0", "8x+y+8=0"],
        "answer": "×-8y-8=0"
    },
    {
        "question": "Find the initial point of v=-3i +j+ 2k if the terminal point is (5, 0, -1)",
        "choices": ["(8,1,-3)", "(8,-1,3)", "(8,-1,-3)", "(8,1,3)"],
        "answer": "(8,-1,-3)"
    },
    {
        "question": "A steel ball at 120°C cools in 20 minutes to 80°C in a room at 25°C. Find the temperature of the ball after half an hour.",
        "choices": ["40.96 deg C", "45.06 deg C", "66.85 deg C", "55.96 deg C"],
        "answer": "66.85 deg C"
    },
    {
        "question": "Find the area above xy-plane of that portion of the surface of sphere x² + y² + z² = a² intercepted by the cylinder x² + y² - ax = 0",
        "choices": ["a^2", "(π-2)a", "(π-2)a^2", "√a"],
        "answer": "(π-2)a^2"
    },
    {
        "question": "Find the vertex of the parabola x=8y",
        "choices": ["(2,4)", "(0,8)", "(0,0)", "(-2,0)"],
        "answer": "(0,0)"
    },
    {
        "question": "A bus leaves Manila at 12 NN for Baguio 250 km away, traveling an average of 55 kph. At the same time, another bus leaves Baguio for Manila traveling 65 kph. At what distance from Manila will they meet?",
        "choices": ["135.42 km", "114.58 km", "129.24 km", "120.76 km"],
        "answer": "114.58 km"
    },
    {
        "question": "What is the equation of the line that passes through (3, 5) and is parallel to the line 4x - 2y + 2 = 0?",
        "choices": ["4x-2y+12=0", "2x+y+10=0", "4x+2y-11=0", "2x-y+11=0"],
        "answer": "2x-y+11=0"
    },
    {
        "question": "Find the area enclosed by a Lemniscate of Bernoulli's equation r² = a² cos(2θ)",
        "choices": ["a²/3", "a²/2", "a²", "a²/4"],
        "answer": "a²"
    },
    {
        "question": "Find the positive number x that exceeds its square by the largest amount.",
        "choices": ["1/3", "1", "2", "1/2"],
        "answer": "1/2"
    },
    {
        "question": "What section is formed by a cone cut by a plane perpendicular to its axis?",
        "choices": ["Circle", "Parabola", "Ellipse", "Hyperbola"],
        "answer": "Circle"
    },
    {
        "question": "Find a - b if |a| = 26 and |b| = 17 and the angle between them is π/3.",
        "choices": ["212", "383", "221", "338"],
        "answer": "221"
    },
    {
        "question": "A horizontal line has a slope of",
        "choices": ["Negative", "Infinity", "Positive", "Zero"],
        "answer": "Zero"
    },
    {
        "question": "Find the limit of z² / (z⁴ + z + 3) as z approaches e^(πi/2)",
        "choices": ["3/16", "(-4+i)/17", "(8i-76)/365", "(5i+6)/287"],
        "answer": "(-4+i)/17"
    },
    {
        "question": "Find the angle between adjacent faces of a regular octahedron",
        "choices": ["45.5", "109.47", "35.34", "105"],
        "answer": "109.47"
    },
    {
        "question": "Two engineers facing each other with a distance of 5 km from each other, the angles of elevation of the balloon from the two engineers are 56° and 58°, respectively. What is the distance of the balloon from the two engineers?",
        "choices": ["4.46 km, 4.54 km", "4.64 km, 4.54 km", "4.64 km, 4.45 km", "4.46 km, 4.45 km"],
        "answer": "4.64 km, 4.54 km"
    },
    {
        "question": "If z1 = 1 - i, z2 = -2 + 4i, z3 = √3 - 2i, evaluate Re{2z1³ + 3z2² - 5z3²}.",
        "choices": ["35", "35i", "-35", "-35i"],
        "answer": "-35"
    },
    {
        "question": "A sinking ship makes a distress signal seen by three observers all 20 m inland from the shore. First observer is perpendicular to the ship, the second observer 100 m to the right of the first, and the third observer is 125 m to the right of the first. How far is the ship from the shore?",
        "choices": ["60 m", "80 m", "100 m", "136.2 m"],
        "answer": "80 m"
    },
    {
        "question": "On a day when the temperature is 30°C, a cool drink is taken from a refrigerator at 5°C. If the temperature of the drink is 20°C after 10 minutes, what will its temperature be after 20 minutes?",
        "choices": ["21 deg C", "24 deg C", "28 deg C", "26 deg C"],
        "answer": "26 deg C"
    },
    {
        "question": "A project can be completed in as many days as there are men in the group. If 4 men were absent, the project will be delayed by 5 days. How many days can they initially finish the project?",
        "choices": ["10", "15", "20", "25"],
        "answer": "20"
    },
    {
        "question": "The volume of a cube becomes three times when its edge is increased by 1 inch. What is the edge of the cube?",
        "choices": ["2.62", "3.62", "3.26", "2.26"],
        "answer": "2.26"
    },
    {
        "question": "A family's electricity bill averages $80 a month for seven months of the year and $20 a month for the rest of the year. If the family's bill were averaged over the entire year, what would the monthly bill be?",
        "choices": ["$45", "$50", "$55", "$60"],
        "answer": "$55"
    },
    {
        "question": "Regular quadrilateral is inscribed in a circle and a regular triangle is circumscribed about it; the difference between these sides of the polygons is equal to 10 cm. Determine the area of the circle.",
        "choices": ["74.76", "75.41", "57.41", "74.15"],
        "answer": "74.76"
    },
    {
        "question": "What is the general solution of (D.4-1)y(t)= 0?",
        "choices": ["y= c1e^t+c2 e^-t+ c3 cost+ c4 sint", "y=c1e^t+c2 e^-t+ c3 te^t+ c4 te^-t", "y=c1e^t+c2 e^-t", "y=c1 e^t+c2 te^-t"],
        "answer": "y= c1e^t+c2 e^-t+ c3 cost+ c4 sint"
    },
    {
        "question": "The ceiling in a hallway 10 m wide is in the shape of a semi-ellipse and is 9 m high in the center and 6 m high at the side walls. Find the height of the ceiling 2 m from either wall.",
        "choices": ["117m", "8.4 m", "6.4 m", "17.5 m"],
        "answer": "8.4 m"
    },
    {
        "question": "Find the area bounded by the parabolas x²-2y = 0 and x² + 2y-8=0.",
        "choices": ["32/3", "20/3", "16/3", "64/3"],
        "answer": "32/3"
    },
    {
        "question": "What is the area of the largest rectangle that can be inscribed in an ellipse with equation 4x^2 + y^2=4?",
        "choices": ["3", "4", "2", "1"],
        "answer": "4"
    },
    {
        "question": "A long piece of galvanized iron 60 cm wide is to be made into a trough by bending up two sides. Find the width of the base if the carrying capacity is maximum.",
        "choices": ["20", "30", "40", "50"],
        "answer": "20"
    },
    {
        "question": "The probability of John's winning whenever he plays a certain game is 1/3. If he plays 4 times, find the probability that he wins just twice.",
        "choices": ["0.2963", "0.2936", "0.2693", "0.2639"],
        "answer": "0.2963"
    },
    {
        "question": "From past experience, it is known that 90 percent of one year old children can distinguish their mother's voice of a similar sounding female. A random sample of one year's old are given this voice recognize test. Find the standard deviation that all 20 children recognize their mother's voice.",
        "choices": ["1.34", "0.88", "0.12", "1.43"],
        "answer": "1.34"
    },
    {
        "question": "A water tank is shaped in such a way that the volume of water in the tank is V =2y^3/2 cu. in. When its depth is y inches. If water flows out through a hole at the bottom of the tank at the rate of 3(sqrt. of y) cu.in/min. At what rate does the water level in the tank fall?",
        "choices": ["11 in/min", "0.11 in/min", "1 in/min", "1/11 in/min"],
        "answer": "1 in/min"
    },
    {
        "question": "The equation x^3 + y^3- 3axy = 0 represents a curve called",
        "choices": ["strophoid", "cardioid", "lemniscate", "Folium of Descartes"],
        "answer": "Folium of Descartes"
    },
    {
        "question": "A rubber ball is dropped from a height of 15 meters. On each rebound, it rises 2/3 of the height from which it last fell. Find the distance travelled by the ball before it comes to rest.",
        "choices": ["60 m", "85 m", "90 m", "75 m"],
        "answer": "75 m"
    },
    {
        "question": "The other name for general triangles is",
        "choices": ["isosceles triangles", "equilateral triangles", "scalene triangles", "right triangles"],
        "answer": "scalene triangles"
    },
    {
        "question": "If f(x)= 10^x + 1, then f(x +1)-f(x) is equal to",
        "choices": ["10(10^x)", "9(10^x)", "9(10^x+1)", "1"],
        "answer": "9(10^x)"
    },
    {
        "question": "The sum of the digits of a 2-digit number is 10. If the number is divided by the unit's digit, the quotient is 3 remainder is 4. Find the number.",
        "choices": ["37", "28", "46", "19"],
        "answer": "28"
    },
    {
        "question": "A statue 3 m high is standing on a base of 4 m high. If an observer's eye is 1.5 m above the ground, how far should he stand for the base in order that the angle subtended by the statue is a maximum?",
        "choices": ["3.71 m", "3.41 m", "3.51 m", "4.41 m"],
        "answer": "3.71 m"
    },
    {
        "question": "A point where the concavity of a curve changes or when the slope of the curve is neither increasing nor decreasing is known as",
        "choices": ["Inflection point", "Maximum point", "Minimal point", "Point of tangency"],
        "answer": "Inflection point"
    },
    {
        "question": "If the coefficient a₀ of a Fourier series of a periodic function is zero, it means that the function has",
        "choices": ["odd-quarter wave symmetry", "even-quarter wave symmetry", "odd symmetry", "odd symmetry or even-quarter wave symmetry or odd-quarter wave symmetry"],
        "answer": "odd symmetry or even-quarter wave symmetry or odd-quarter wave symmetry"
    },
    {
        "question": "A Cylindrical tank 4 ft across the top and 6 ft deep is to be coated by asbestos which is 1 inch thick, find the approximate volume of the asbestos needed in cu. ft.",
        "choices": ["4.8", "8.4", "5.4", "6.4"],
        "answer": "8.4"
    },
    {
        "question": "Find the domain of the function: f(x)=3x, -6 ≤ x ≤ 8.",
        "choices": ["(-6,8)", "(-18,24)", "[-18,24]", "[-6, 8]"],
        "answer": "[-6, 8]"
    },
    {
        "question": "Identify the curve described by |z = 3i| - |z + 3i| = 4",
        "choices": ["ellipse", "line", "circle", "hyperbola"],
        "answer": "hyperbola"
    },
    {
        "question": "Find the minimum distance from the point (4, 2) to the parabola y^2 = 8x.",
        "choices": ["4√3", "√3", "2√2", "2√3"],
        "answer": "2√2"
    },
    {
        "question": "Find the volume of the solid common between intersecting cylinders with radius of 3 ft.",
        "choices": ["72", "288", "144", "256"],
        "answer": "144"
    },
    {
        "question": "Find the relative error in the computed volume of a cube due to an error of 2% in measuring the edge of the cube.",
        "choices": ["0.05", "0.04", "0.06", "0.07"],
        "answer": "0.06"
    },
    {
        "question": "What type of curve is generated by a point that moves in uniform circular motion about an axis, while traveling with a constant speed parallel to the axis?",
        "choices": ["A cycloid", "A hypocycloid", "An epicycloid", "A Helix"],
        "answer": "A Helix"
    },
    {
        "question": "Im (1+i)^(1+1)",
        "choices": ["0.538", "0.274", "-3.102", "-1.537"],
        "answer": "0.538"
    },
    {
        "question": "Solve the equation (x2y - 2) + (x + 2xy - 5)i=0",
        "choices": ["x = 1, y = 2", "x = 3, y = 4", "x = ½ ,y = 3", "x = 4, y = -½"],
        "answer": "x = 1, y = 2"
    },
    {
        "question": "Find two complex numbers whose sum is 4 and whose product is 8.",
        "choices": ["1±2i", "2±i", "1±i", "2±2i"],
        "answer": "2±2i"
    },
    {
        "question": "If x3 + 3x2 + (K+5)x + 2 - K is divided by x + 1 and the remainder is 3, then the value of K is",
        "choices": ["-2", "-4", "-3", "-5"],
        "answer": "-2"
    },
    {
        "question": "How much water must be evaporated from 10 kg solution, which has 4% salt to make a solution of 10% salt?",
        "choices": ["4 kg", "6 kg", "5 kg", "7 kg"],
        "answer": "6 kg"
    },
    {
        "question": "Ten liters of 25% salt solution and 15 liters of 35% salt solution are poured into a drum originally containing 30 litres of 10% solution. What is the percent concentration of salt in the mixture?",
        "choices": ["19.55%", "27.05%", "22.15%", "25.72%"],
        "answer": "19.55%"
    },
    {
        "question": "An airplane flying with the wind, took 2 hours to travel 1000 km and 2.5 hours in flying back. What was the wind velocity in kph?",
        "choices": ["50", "70", "60", "40"],
        "answer": "50"
    },
    {
        "question": "A rubber ball is dropped from a height of 27 meters. Each time that it hits the ground it bounces to a height ⅔ of that of which it fell. Find the distance that it travels up to the time that it hits the ground for the 5th time.",
        "choices": ["341/3 meters", "135 meters", "498/7 meters", "152 meters"],
        "answer": "341/3 meters"
    },
    {
        "question": "There are 6 geometric means between 4 and 8748. Find the sum of all the terms.",
        "choices": ["10,250", "15,480", "13,120", "9,840"],
        "answer": "13,120"
    },
    {
        "question": "A job could be done by eleven workers in 15 days. Five workers started the job. They were reinforced with four more workers at the beginning of the 6th day. Find the total number of days it took them to finish the job.",
        "choices": ["22.36", "23.22", "21.42", "20.56"],
        "answer": "20.56"
    },
    {
        "question": "If a randomly selected consumer has seen an advertisement for the new soap, what is the probability that this consumer has tried the new soap?",
        "choices": ["15%", "57%", "37.5%", "63%"],
        "answer": "37.5%"
    },
    {
        "question": "Find k so that the expression kx2 - 3kx + 9 = 0 is a perfect square",
        "choices": ["3", "4", "12", "6"],
        "answer": "4"
    },
    {
        "question": "A man standing on a 48.5 m high building has an eyesight height of 1.5m from the top of the building, took a depression reading from the top of another nearby building and nearest wall, which are 50° and 80° respectively. Find the height of the nearby building in meters and both buildings lie on the same horizontal plane.",
        "choices": ["39.49", "35.5", "30.74", "42.55"],
        "answer": "39.49"
    },
    {
        "question": "A man finds the angle of elevation of the top of a tower to be 30°. He walks 85m nearer the tower and finds its angle of elevation to be 60°. What is the height of the tower?",
        "choices": ["76.31 m", "73.31 m", "73.16 m", "73.61 m"],
        "answer": "73.61 m"
    },
    {
        "question": "Find the equation of the line that passes 3 units from origin and parallel to 3x - 4y + 5 = 0",
        "choices": ["3x - 4y + 15 = 0", "3x - 4y + 5 = 0", "3x - 4y - 8 = 0", "3x - 4y + 8 = 0"],
        "answer": "3x - 4y + 15 = 0"
    },
    {
        "question": "Find the equation of the line that passes 3 units from origin and parallel to 3x - 4y - 10 = 0",
        "choices": ["3x - 4y - 15 = 0", "3x - 4y + 5 = 0", "3x - 4y - 8 = 0", "3x - 4y + 8 = 0"],
        "answer": "3x - 4y - 15 = 0"
    },
    {
        "question": "Find the family of parabola with vertex at the origin and focus at the x-axis.",
        "choices": ["Cy = x2", "y = x2 + C", "Cx = y2", "x = y2 + C"],
        "answer": "Cx = y2"
    },
    {
        "question": "Axis of hyperbola through its foci.",
        "choices": ["Latus Rectum", "Directrix", "Transverse Axis", "Major Axis"],
        "answer": "Transverse Axis"
    },
    {
        "question": "What conic section, B2 - 4AC = 0?",
        "choices": ["Circle", "Ellipse", "Parabola", "Hyperbola"],
        "answer": "Parabola"
    },
    {
        "question": "What conic section, B2 - 4AC > 0?",
        "choices": ["Circle", "Ellipse", "Parabola", "Hyperbola"],
        "answer": "Hyperbola"
    },
    {
        "question": "Determine the equation describing the locus of point P (x,y) such that the sum of the distances between P and (-5, 0) and between P and (5,0) is constant at 20 units.",
        "choices": ["(x/10)2 + (y/8.66)2 = 1", "(x/10)2 + (y/5)2 = 1", "(x/5)2 + (y/10)2 = 1", "(x/8.66)2 + (y/10)2 = 1"],
        "answer": "(x/10)2 + (y/8.66)2 = 1"
    },
    {
        "question": "The center of a suspension bridge forms a parabolic arc. The cable is suspended from the top of the support towers, which are 800 ft, apart. The tops of the towers are 170 ft. above the road and the lowest point of the cable is midway between the towers and 10 ft. above the road. Find the height of the cable above the road at 100 feet from the towers.",
        "choices": ["100 ft", "80 ft", "90 ft", "85.5 ft"],
        "answer": "100 ft"
    },
    {
        "question": "Radium decomposes approximately at a rate proportional to the amount present. If 100 gm now, will be 92 gm a hundred years later, find the half-life of radium.",
        "choices": ["1698", "1869", "1968", "1689"],
        "answer": "1698"
    },
    {
        "question": "Find the area of hypocycloid, x= acos3 θ, y=asin3 θ",
        "choices": ["πa2/2", "πa2/8", "a2", "3πa2/8"],
        "answer": "3πa2/8"
    },
    {
        "question": "The cost per hour of running a motorboard is proportional to the cube of the speed. At what speed will the boat run against a current of 4 km/hr in order to go a given distance most economically?",
        "choices": ["4 kph", "6 kph", "8 kph", "12 kph"],
        "answer": "6 kph"
    },
    {
        "question": "Radium decomposes approximately at a rate proportional to the amount present. If 100 gm now, will be 96 gm. A hundred years later, find the time it takes for ⅔ amount to be decomposed.",
        "choices": ["993.25", "4389.20", "2691.23", "2961.23"],
        "answer": "993.25"
    },
    {
        "question": "The cost per hour of running a motorboard is proportional to the cube of the speed. At what speed will the boat run against a current of 8 km/hr in order to go a given distance most economically?",
        "choices": ["4 kph", "6 kph", "8 kph", "12 kph"],
        "answer": "12 kph"
    },
    {
        "question": "A man is driving a car at the rate of 30 km/hour towards the foot of the monument 6 high. At what rate is he approaching the top when it is 36 m from the foot of the monument?",
        "choices": ["-52.80 km/hr", "10.55 km/hr", "-29.59 km/hr", "12.52 km/hr"],
        "answer": "-29.59 km/hr"
    },
    {
        "question": "A triangular corner lot has perpendicular sides of lengths 90m and 60m. Find the dimensions of the largest rectangular building that can be constructed on the lot with sides along the streets.",
        "choices": ["45m x 30m", "45m x 75m", "75m x 25m", "18m x 75m"],
        "answer": "45m x 30m"
    },
    {
        "question": "The shortest ladder that will reach from the ground level to a high vertical wall is 5m. If it cleared 2m vertical fence, find the distance of the fence from the wall.",
        "choices": ["1.55m", "1.34m", "1.87m", "1.67m"],
        "answer": "1.55m"
    },
    {
        "question": "Postal regulations require that a parcel post package to be no greater than 3m in the sum of its length and girth (perimeter of the cross section). What is the volume in cu_ meter of the largest package allowed by postal regulations if the package is to be rectangular in shape and has square ends?",
        "choices": ["3 cu. m", "2 cu. m", "1/3 cu. m", "1/4 cu. m"],
        "answer": "1/4 cu. m"
    },
    {
        "question": "Find the equation of the tangent to x2 + y2 = 5 passing through the point (3, -1).",
        "choices": ["x + y = 2", "3x - y = 10", "x + 3y = 0", "2x + y = 5"],
        "answer": "3x - y = 10"
    },
    {
        "question": "Find the radius of curvature of the parabola y2 -4x = 0 at the point (4, 4).",
        "choices": ["22.36", "20.36", "25.36", "27.36"],
        "answer": "22.36"
    }



	    
],





  "ESAS": [

  {
    "question": "Definition of strain",
    "choices": ["force per unit length", "force per unit area", "force per unit volume", "deformation per unit length"],
    "answer": "deformation per unit length"
},
{
    "question": "What are the changes in internal energy for reversible adiabatic and isothermal processes respectively?",
    "choices": ["CpΔT and 0", "0 and CvΔT", "CvΔT and CpΔT", "CvΔT and 0"],
    "answer": "CvΔT and 0"
},
{
    "question": "Which of the following is not a type of crystalline lattice imperfection?",
    "choices": ["point", "Line", "Diffusion", "Surface"],
    "answer": "Diffusion"
},
{
    "question": "The binary coding scheme most common used in microcomputers is___",
    "choices": ["kbps", "bits per second", "ASCII", "hexadecimal"],
    "answer": "ASCII"
},
{
    "question": "The applicant of a professional electrical engineer must submit how many certifications from different professional electrical engineers to ensure that the experience record of the applicant is factual and the technical paper submitted was actually prepared by the applicant?",
    "choices": ["5", "2", "1", "3"],
    "answer": "3"
},
{
    "question": "Approximately how much power is required to isothermally compress 23 m^3/min of air from 101.5 KPa to 828.5 kPa",
    "choices": ["64KW", "82KW", "92KW", "98KW"],
    "answer": "82KW"
},
{
    "question": "A substance is oxidized when which of the following occurs?",
    "choices": ["it turns red", "it becomes more negative", "it loses electrons", "it gives off heat"],
    "answer": "it loses electrons"
},
{
    "question": "In order to assign oxidation states in polyatomic molecules, which of the following rules is followed?",
    "choices": ["the oxidation of all elements in any allotropic form is zero", "the oxidation state of oxygen is always -2", "the oxidation state of hydrogen is always +1", "all other oxidation states are chosen such that the algebraic sum of the oxidation states for the ion or molecules is zero."],
    "answer": "the oxidation of all elements in any allotropic form is zero"
},
{
    "question": "Which of the following is a line defect in a lattice crystal structure",
    "choices": ["tilt boundary", "screw dislocation", "vacancy", "schottky imperfection"],
    "answer": "screw dislocation"
},
{
    "question": "The area of shear diagram of a beam between any two points on the beam is equal to:",
    "choices": ["change in shear between the two points", "total shear beyond the two points", "average moments between the two points", "change in moment between the two points"],
    "answer": "change in moment between the two points"
},
{
    "question": "A unit mass of steam is expanded in a cylinder in such a manner that no energy is added or lost as heat. This process is called an?",
    "choices": ["constant enthalpy process", "isothermal process", "adiabatic process", "constant volume process"],
    "answer": "adiabatic process"
},
{
    "question": "Elements which generally exhibits multiple oxidation state are",
    "choices": ["metalloids", "transition elements", "non-metals", "noble gasses"],
    "answer": "transition elements"
},
{
    "question": "The purpose of manganese sulfide in steel alloying is to increase",
    "choices": ["brittleness", "atmospheric corrosion resistance", "machinability", "dynamic & high temperature strength"],
    "answer": "machinability"
},
{
    "question": "What do you call a polymer without additives and without blending with another polymer?",
    "choices": ["polyethylene", "copolymer", "polyvinyl chloride", "homopolymer"],
    "answer": "homopolymer"
},
{
    "question": "Heat is transferred at constant volume to the thermodynamics system of a fixed mass. The thermodynamics system will produce__",
    "choices": ["small amount of work", "zero work", "large amount of work", "negative work"],
    "answer": "zero work"
},
{
    "question": "A source program is a program written in__",
    "choices": ["alphanumeric characters", "high level language", "machine language", "ASCII"],
    "answer": "high level language"
},
{
    "question": "Who shall be the executive officer of the board of electrical engineering and shall also conduct the examination given by the board, as provided in Article II, sec. 9 of R.A. 7920?",
    "choices": ["a member of the board of EE", "the president of the Philippines", "the commissioner of the PRC", "chairman of the board of EE"],
    "answer": "the commissioner of the PRC"
},
{
    "question": "In a long column(slenderness ratio > 160) which of the following has the greatest influence on its tendency to buckle under a compressive load.",
    "choices": ["the modulus of elasticity of the material", "the compressive strength of the material", "the radius of gyration of the column", "the length of the column"],
    "answer": "the length of the column"
},
{
    "question": "The stress concentration factor___",
    "choices": ["is the ratio of the average stress on a section to the allowable stress", "cannot be evaluated for brittle materials", "is the ratio of areas involved in a sudden change of cross section", "is the ratio of the maximum stress produced in a cross section to the average stress over the section"],
    "answer": "is the ratio of the maximum stress produced in a cross section to the average stress over the section"
},
{
    "question": "In the design of waterways, the “hydraulic jump” is sometimes used for__",
    "choices": ["elimination of turbulence", "energy dissipation", "prevention of sedimentation", "measurement of flow"],
    "answer": "energy dissipation"
},
{
    "question": "An open system first law should be utilized for all the following except:",
    "choices": ["a nozzle", "a turbine", "a piston-cylinder device with no inlet / exhaust values", "a compressor"],
    "answer": "a piston-cylinder device with no inlet / exhaust values"
},
{
    "question": "An ideal gas is compressed isothermally. The enthalpy change is:",
    "choices": ["always negative", "always positive", "zero", "infinity"],
    "answer": "zero"
},
{
    "question": "Which of the following statements is true for a perfect gas flowing through an insulation valve?",
    "choices": ["enthalpy is essential unchanged", "temperature increases greatly", "entropy decreases", "flow is isentropic"],
    "answer": "enthalpy is essential unchanged"
},
{
    "question": "Which of the following is highly reactive in its pure form?",
    "choices": ["HCl", "CO2", "Na", "He"],
    "answer": "Na"
},
{
    "question": "The purpose of vanadium in steel alloying is to__",
    "choices": ["increase strength", "fix carbon in inert particles and reduce martensitic hardness", "increase brittleness", "increase machinability"],
    "answer": "increase strength"
},
{
  "question": "Which of the following is NOT a method of non destructive testing of steel casting and forgings?",
  "choices": ["chemical analysis", "radiography", "magnetic particle", "ultrasonic"],
  "answer": "chemical analysis"
},
{
  "question": "What is the term for a deadlock situation that occurs when a program references a different page for almost every instruction and there is not even enough real memory to hold most of the virtual memory?",
  "choices": ["paging", "stacking", "thrashing", "handshaking"],
  "answer": "thrashing"
},
{
  "question": "PEC part 2, 2020 edition is the ___",
  "choices": ["3rd edition", "4th edition", "5th edition", "6th edition"],
  "answer": "6th edition"
},
{
  "question": "PEC part 2, 2020 edition is the professional regulatory board of electrical engineering (PRBEE) resolution no. ____",
  "choices": ["7", "8", "9", "10"],
  "answer": "8"
},
{
  "question": "The moment of a triangle with respect to the line passing through its centroid is how many times with respect to its base?",
  "choices": ["1/36", "⅓", "5", "12"],
  "answer": "⅓"
},
{
  "question": "How much should be put in an investment with 14% effectively annual rate today to have P12,000 in five years?",
  "choices": ["6,713.35", "5,831.63", "6,232.42", "5,966.18"],
  "answer": "6,232.42"
},
{
  "question": "If a material expands freely due to heating it will develop",
  "choices": ["thermal stresses", "tensile stress", "bending", "no stress"],
  "answer": "no stress"
},
{
  "question": "It is a property of a material by virtue of which a body returns to original shape after after removal of the load is called___",
  "choices": ["plasticity", "elasticity", "ductility", "resilience"],
  "answer": "elasticity"
},
{
  "question": "You are thinking about retirement and you are considering investment money each month so you will have P 1,000,000 in 30 years. If the nominal annual interest rate is 8% and the interest is compound monthly, what is the amount of monthly investment?",
  "choices": ["Php 780.95", "Php 670.96", "Php 680.80", "Php 750.89"],
  "answer": "Php 670.96"
},
{
  "question": "Which of the following statements is false?",
  "choices": [
      "the amount or percentage of cold work cannot be obtained from information about change in the area or thickness of a metal.",
      "the process of applying force to a metal at temperature below the temperature of crystallisation in order to plastically deform the metal is called cold working.",
      "annealing eliminates most of the defects caused by the cold-working metal.",
      "annealing reduces the hardness of the metal."
  ],
  "answer": "the amount or percentage of cold work cannot be obtained from information about change in the area or thickness of a metal."
},
{
  "question": "Which of the following statements is FALSE?",
  "choices": [
      "There is a considerable increase in the hardness and the strength of a cold-worked metal.",
      "cold-working a metal significantly reduces ductility",
      "cold-working causes sight decrease in the density and electrical conductivity of a metal.",
      "cold-working decreases the yield point of a metal."
  ],
  "answer": "cold-working decreases the yield point of a metal."
},
{
  "question": "Where receptacles are connected to a 20-amp branch circuit. The maximum allowable cord plug connected to load shall not be more than___",
  "choices": ["30A", "24A", "16A", "20A"],
  "answer": "16A"
},
{
  "question": "In fastening an outlet to a brick wall the electrician should use the following. Which one is this?",
  "choices": ["toggle bolts", "expansion bolts", "temporary nail", "wooden plug"],
  "answer": "expansion bolts"
},
{
  "question": "How many years will take for an investment to double, if the interest rate is 8% per year compound interest?",
  "choices": ["8 years", "9 years", "10 years", "7 years"],
  "answer": "9 years"
},
{
  "question": "In swimming pools, underwater luminaires of not more than ____ volts must have GFCI protection.",
  "choices": ["120", "30", "15", "240"],
  "answer": "15"
},
{
  "question": "An escalator raises a 100 kg bucket of sand 10m in 1 minute. Determine the total amount of work done during the",
  "choices": ["9,800", "32,200", "102", "98"],
  "answer": "9,800"
},
{
  "question": "How many branch circuits in 55-KVA load, with 220v and 20 Amp branch circuits?",
  "choices": ["12", "13", "14", "15"],
  "answer": "13"
},
{
  "question": "It is an informal website publishing on the world wide web that consists of discrete, often informal diary style text entries which are displayed in reverse chronological order so the most recent post appears first at the top of the page",
  "choices": ["blogging", "texting", "geotagging"],
  "answer": "blogging"
},
{
  "question": "Type of fire extinguisher is used for fire due to liquids?",
  "choices": ["class A", "class B", "class C", "class D"],
  "answer": "class B"
},
{
  "question": "Which of the following is NOT the cause of electric fire?",
  "choices": ["electric short circuit", "open doors", "loose connection", "overloading on wires"],
  "answer": "open doors"
},
{
  "question": "What is %% used for?",
  "choices": ["argument placeholder", "block quotes", "code sections", "conversion"],
  "answer": "code sections"
},
{
  "question": "Which function could you use for multiple linear regression?",
  "choices": ["polyval", "regress", "solve", "polyfit"],
  "answer": "regress"
},
{
  "question": "Which command will create a column vector with the values 7 and 9?",
  "choices": ["c = [7,8,9]", "c = [7:8:9]", "c = [7;8;9]", "c = [7 8 9]"],
  "answer": "c = [7;8;9]"
},
{
  "question": "In PRC renewal, how much is need CPD points?",
  "choices": ["15", "60", "45", "30"],
  "answer": "15"
},
{
  "question": "When an engineer enters management, what is the most likely problem he finds difficult to acquire?",
  "choices": [
      "learning to trust others",
      "learning how to work through others",
      "learning how to take satisfaction in the work",
      "all of the above"
  ],
  "answer": "all of the above"
},
{
  "question": "A young electrical engineer borrowed money at 12% interest and paid P2,000 per annum for the last 4 years. What does he have to pay at the end of the fifth year in order to pay off his loan?",
  "choices": ["6,222.39", "6,909.39", "6,292.93", "6,992.93"],
  "answer": "6,992.93"
},
{
  "question": "During a fire, the gases in a room will expand and can eventually break out of tight fitting windows. Suppose a room 10 feet by 12 feet with a 7-foot ceiling originally at 1 atm and 25 deg. C begins to burn. The temperature in the room rises to 400 deg. C. What will be the amount of pressure exerted by the heated air (no change in volume, yet)?",
  "choices": ["2.26 atm", "16.0 atm", "6.62 atm", "5.11 atm"],
  "answer": "2.26 atm"
},
{
  "question": "The density of oxygen is 1.42 g/L at S.T.P. what is the density oxygen at 17 deg. C and 700 torr?",
  "choices": ["1.24 g/L", "1.42 g/L", "0.08 g/L", "0.80 g/L"],
  "answer": "1.24 g/L"
},
{
  "question": "The second law of thermodynamics can be slated as: (I. Heat flows spontaneously from a hot object to a cold one but not the reverse II. Natural processes lend to move toward a state of greater disorder or greater entropy)",
  "choices": ["I only", "II only", "I and II", "Neither I nor II"],
  "answer": "I and II"
},
{
  "question": "A student living in a 4-m x 6-m x 6-m dormitory room turns his 150-W fan on before she leaves her room on a summer day... Determine the temperature in the room when she comes back 10 hours later.",
  "choices": ["27.49 deg.C", "36.13 deg.C", "55.23 deg.C", "49.51 deg.C"],
  "answer": "49.51 deg.C"
},
{
  "question": "What is the form of the moment diagram of a beam supported at both ends and carrying a uniformly distributed load?",
  "choices": ["triangle", "hyperbola", "parabola", "rectangle"],
  "answer": "parabola"
},
{
  "question": "An object that has momentum must also have____",
  "choices": ["acceleration", "impulse", "kinetic energy", "potential energy"],
  "answer": "kinetic energy"
},
{
  "question": "Which of the following element is added to high-speed tool steels as a scavenger to remove slag impurities during melting point and also increasing cutting efficiency of tools.",
  "choices": ["chromium", "molybdenum", "vanadium", "manganese"],
  "answer": "vanadium"
},
{
  "question": "Which of the following is NOT a prime requirement of tool material?",
  "choices": ["it should have good machinability", "it should have low erosion rate", "it should have low melting point", "none of the above"],
  "answer": "it should have low melting point"
},
{
  "question": "An inventor claims to extract 100KJ of energy from 30Deg.C sea water and generate 7Kg of heat while rejecting 93Kj to a 10Deg.C stratum. The scheme fails because:",
  "choices": ["the temperature of the sea water is too low", "it is a perpetual-motion machines", "it violates the first law", "it violates the second law"],
  "answer": "it violates the second law"
},
{
  "question": "What is the corresponding rate of interest for 18% simple discount rate?",
  "choices": ["20.85%", "23.72%", "22.64%", "21.95%"],
  "answer": "21.95%"
},
{
  "question": "Find the amount of money you have to deposit in order to accumulate P1,500 per quarter for 10 years with an interest rate of 12% compounded quarterly.",
  "choices": ["P4,958.71", "P4,598.71", "P34,672.16", "P36,472.16"],
  "answer": "P34,672.16"
},
{
  "question": "A bicycle line has a volume of 60 cu. cm. it is inflated with CO2 to a pressure of 5.4 atm at 20 deg. C. Approximately how many grams of CO2 are contained in the tire?",
  "choices": ["4.8g", "6g", "3.8g", "8g"],
  "answer": "6g"
},
{
  "question": "If Php 25,000 is deposited now into a savings account that earns 6% per year, what uniform annual amount could be withdrawn at the end of each year for ten years so that nothing would be left in the account after 10th withdrawal?",
  "choices": ["Php 3725.74", "Php 3570.47", "Php 3968.95", "Php 4326.78"],
  "answer": "Php 3725.74"
},
{
  "question": "Two springs, one of force constant k1 = 5 N/m and the other of force constant k2 = 10 N/m are connected end to end. Find the force constant of the combination?",
  "choices": ["15 N/m", "5 N/m", "3.33 N/m", "10 N/m"],
  "answer": "3.33 N/m"
},
{
  "question": "A 100-gram object is suspended from a spring whose force constant is 50 N/m. What is the frequency of oscillation of the system?",
  "choices": ["3.56 Hz", "0.281 Hz", "50 Hz", "5.36 Hz"],
  "answer": "3.56 Hz"
},
{
  "question": "Hooke’s law holds goods up to ____",
  "choices": ["limit of proportionality", "elastic lmit", "yield point", "breaking point"],
  "answer": "limit of proportionality"
},
{
  "question": "A supercooled liquid is a liquid which is cooled to a temperature below that at which it ordinates solidifies. Is this system in thermodynamics in equilibrium?",
  "choices": ["Not in thermodynamic equilibrium", "Yes in thermodynamics equilibrium", "Neither A nor B", "None of these"],
  "answer": "Not in thermodynamic equilibrium"
},
{
  "question": "When engineers enters a management, what is the most likely problem he finds difficult to acquire?",
  "choices": ["learning to trust others", "learning how to work through others", "learning how to take satisfaction in the work of others", "all of the above"],
  "answer": "all of the above"
},
{
  "question": "Each piston of a certain car engine weighs 2lbs and has a “stroke” (total travel distance) of 4 inches. When the engine is operating at 3000 rpm, find its maximum acceleration?",
  "choices": ["1.65 x 10^4 fps^2", "1.56 x 10^4 fps^2", "2.56 x 10^3 fps^2", "2.65 x 10^3 fps^2"],
  "answer": "1.56 x 10^4 fps^2"
},
{
  "question": "What is NOT a factor to be taken into consideration when selecting an organizational structure for managing projects?",
  "choices": ["overhead cost", "type of technology used", "location of the project", "Level of uncertainty in projects"],
  "answer": "location of the project"
},
{
  "question": "For a project manager to have an effective means of identifying and communicating the planned activities and their interrelationships, he must use a network technique. One of the network techniques is commonly known as CPM. What does CPM mean?",
  "choices": ["Critical plan method", "Critical path method", "Critical project method", "coordinated"],
  "answer": "Critical path method"
},
{
  "question": "Which is correct dimension statements for a 9x9 matrix A, and a vector B, with 9 elements?",
  "choices": ["DIM A(9,9), B(9)", "DIMENSION A(9,9), B(9)", "DIMENSION A(9,9), B(9)", "DIMENSION A(9,9), B(9)"],
  "answer": "DIMENSION A(9,9), B(9)"
},
{
  "question": "Which of the following is NOT a good application of network analysis?",
  "choices": ["electrical engineering", "information theory", "cybernetics", "Inventory"],
  "answer": "Inventory"
},
{
  "question": "A lamp is suspended from a high ceiling with a cord 12ft. Long. Find its period of oscillation.",
  "choices": ["3.58", "3.85", "2.35", "2.53"],
  "answer": "3.85"
},
{
  "question": "What is the final value of SUM in this program? \n SUM = 0 \n DO 77 i = 1,3,2  \n SUM*SUM+1, 0/1 \n 77 CONTINUE",
  "choices": ["1", "4/3", "5/3", "7/3"],
  "answer": "4/3"
},
{
  "question": "What is the efficiency of an otto cycle with a compression ratio of 6:1? The gas used is air",
  "choices": ["0.167", "0.191", "0.512", "0.488"],
  "answer": "0.512"
},
{
  "question": "Convert 725 torr to atm?",
  "choices": ["0.954", "1.048", "1.010", "0.459"],
  "answer": "0.954"
},
{
  "question": "The specific gravity of the fluid is 0.8. What is its specific weight at 4 deg. C?",
  "choices": ["7848 N/m^3", "14,100 N/m^3", "9810 N/m^3", "12,250 N/m^3"],
  "answer": "7848 N/m^3"
},
{
  "question": "A certain torsion pendulum consists of a 6lb aluminum disk 1ft in diameter that is suspended from its center by a wire. When a torque of 1 lb-ft is applied to the disk it rotates through 15 degrees. Find the frequency of oscillation of the disk?",
  "choices": ["0.492 Hz", "2.04 Hz", "0.924 Hz", "4.02 Hz"],
  "answer": "2.04 Hz"
},
{
  "question": "What is most nearly the energy of a photon of wavelength of 0.1nm?",
  "choices": ["0.09x10^-14 J", "nakaharang yung ulo", "1.6x10^-15J", "2.0x10^-15J"],
  "answer": "2.0x10^-15J"
},
{
  "question": "The ideal reversible carnot cycle involves four basic processes. What type of process are they?",
  "choices": ["all isothermal", "all adiabatic", "two isothermal and two isentropic", "two adiabatic and two isentropic"],
  "answer": "two isothermal and two isentropic"
},
{
  "question": "A panty bit is also called_ is an extra bit attached to the end byte for purposes of checking for accuracy",
  "choices": ["chip bit", "check bit", "RAM capacity", "cache memory"],
  "answer": "check bit"
},
{
  "question": "The process of notifying network that you are using a specific computer is called",
  "choices": ["booting", "log-in", "password", "log-out"],
  "answer": "log-in"
},
{
  "question": "Heating value of coal largely depends on",
  "choices": ["moisture content", "volatile matter", "size of coal particles", "ash content"],
  "answer": "ash content"
},
{
  "question": "Which of the following is the most accurate about streamline?",
  "choices": ["it is a line normal to the velocity vector everywhere", "It is fixed in space in steady flow", "it is a path of fluid particle", "It is perpendicular to path line"],
  "answer": "It is fixed in space in steady flow"
},
{
  "question": "The term scavenging is generally associated with?",
  "choices": ["2-stroke cycle engines", "4-stroke cycle engines", "Diesel engines", "High efficiency engines"],
  "answer": "High efficiency engines"
},
{
  "question": "What law states that for all adiabatic processes between two specified states of a closed system, the ned work done is the same regardless of the nature of the closed system and the details of the process?",
  "choices": ["fourth law of thermodynamics", "second law of thermodynamics", "first law of thermodynamics", "third law of thermodynamics"],
  "answer": "first law of thermodynamics"
},
{
  "question": "2 liters of oil weighs 16N. Calculate the specific gravity of the oil. Consider the density of water to be 998 kg/m^2",
  "choices": ["0.846", "0.836", "0.856", "0.816"],
  "answer": "0.816"
},
{
  "question": "With the electric arc welding rate of 18 in/min. How long will it take to weld ½ in. Thick plate by 3ft. Long seam?",
  "choices": ["3 min.", "2 min.", "1.5 min.", "4 min."],
  "answer": "2 min."
},
{
  "question": "If 5 liters of a certain oil weighs 30N. Then what will be the specific weight of that oil?",
  "choices": ["6000 N/m^3", "3000 N/m^3", "600 N/m^3", "300 N/m^3"],
  "answer": "6000 N/m^3"
},
{
  "question": "If I want to save a formatted string to memory, but don't want to print it out,which command should I use?",
  "choices": ["sprintf", "disp", "echo", "fprinf"],
  "answer": "sprintf"
},
{
  "question": "To better manage memory and prevent unnecessary memory allocations, Matlab uses:",
  "choices": ["matric math", "vectors", "delayed copy", "scalars"],
  "answer": "delayed copy"
},
{
  "question": "Which is these is not an aspect of for/ while loop:",
  "choices": ["condition", "runner", "update", "initialization"],
  "answer": "runner"
},
{
  "question": "Which command is used to clear a command window?",
  "choices": ["clear", "clear all", "close all", "clc"],
  "answer": "clc"
},
{
  "question": "When used in the fprintf command, the %g is used as the",
  "choices": ["single character display", "default number display", "fixed point display", "string notation display"],
  "answer": "default number display"
},
{
  "question": "The output of cat=['cat' 'dog'] is",
  "choices": ["cat&dog", "CatDog", "catdog", "cat dog"],
  "answer": "catdog"
},
{
  "question": "This Matlab command clears all data and variables stored in memory:",
  "choices": ["cle", "delete", "deallocate", "clear"],
  "answer": "clear"
},
{
  "question": "To display 'Question 2' in the command window, the correct command is",
  "choices": ["Question 2", "disp(‘Question 2’)", "display(‘Question 2’)", "disp(Question 2)"],
  "answer": "disp(‘Question 2’)"
},
{
  "question": "What symbol precedes all comments in Matlab?",
  "choices": ["%", "//", "none of the above", "&<amp"],
  "answer": "%"
},
{
  "question": "To print a newline in a fprintf statement, you must use the following escape character:",
  "choices": ["\\nxt", "\\nl", "\\t", "\\n"],
  "answer": "\\n"
},
{
  "question": "To add a comment to the mfile, the MATLAB command is",
  "choices": ["&", "comment(**)", "%", ";"],
  "answer": "%"
},
{
  "question": "Command used to display the value of variable x.",
  "choices": ["disp x", "displayx", "disp(x)", "vardisp(‘x’)"],
  "answer": "disp(x)"
},
{
  "question": "Which command is used to display the contents of a file in the MATHLAB command windows?",
  "choices": ["view", "show", "display", "load"],
  "answer": "load"
},
{
  "question": "Which of the following is not a predefined variable in mathlab",
  "choices": ["inf", "g", "i", "pi"],
  "answer": "g"
},
{
  "question": "The num2str command",
  "choices": ["converts a number to string", "converts a string to a number", "concatenates strings", "concatenates number and strings"],
  "answer": "converts a number to string"
},
{
  "question": "To stop the execution of a MATHLAB command, use keys?",
  "choices": ["ctrl+s", "ctrl_enter", "ctrl+c", "ctrl+b"],
  "answer": "ctrl+c"
},
{
  "question": "In Mathlab, this keyword immediately moves to the next iteration of the loop",
  "choices": ["update", "break", "goto", "continue"],
  "answer": "continue"
},
{
  "question": "Characters in Mathlab are represented in their value in memory",
  "choices": ["string", "hex", "ASCII", "decimal"],
  "answer": "ASCII"
},
{
  "question": "The help command works only for pre-defined function in Mathlab",
  "choices": ["I only", "None of the above", "Both I & II", "II only"],
  "answer": "I only"
},
{
  "question": "MATHLAB stand for?",
  "choices": ["matrix library", "math library", "matrix laboratory", "matrix lib"],
  "answer": "matrix laboratory"
},
{
  "question": "If vector = [1 2 3 4; 11 24 92 100; 345 65 90 1]. What will the value of a be equal to if this code is entered into MATHLAB: [a b] = size (vector)?",
  "choices": ["4", "3", "1234", "12"],
  "answer": "3"
},
{
  "question": "Command is used to save command window text to file.",
  "choices": ["textofile", "todiary", "diary", "saveas"],
  "answer": "diary"
},
{
  "question": "To join one or more string into a single string is known as",
  "choices": ["joining", "concatenation", "string conversion", "string theory"],
  "answer": "concatenation"
},
{
  "question": "Which of the following in used to see if two elements are equal in MATHLAB",
  "choices": ["=", "!=", "isequal", "=="],
  "answer": "=="
},
{
  "question": "The clc command is used to",
  "choices": ["clear the command window", "save the existing mfile", "erase everything in the mfile", "clean the desktop"],
  "answer": "clear the command window"
},
{
  "question": "What is the command used to clear all variable form the worKplace in MATHLAB",
  "choices": ["delete", "clearvars", "remove", "clear"],
  "answer": "clearvars"
},
{
  "question": "The output of the last line is aa=2 as=number2str(aa) cat=[‘cat’as]",
  "choices": ["cat aa", "?? undefined var", "cat2", "cat 2"],
  "answer": "cat2"
},
{
  "question": "The computer language that is executed within a computer's central processing unit is called",
  "choices": ["A high level language", "An assembly language", "MS DOS", "Machine language"],
  "answer": "Machine language"
},
{
  "question": "Which function could you use for multiple linear regression?",
  "choices": ["polyval", "polyfit", "solve", "regress"],
  "answer": "regress"
},
{
  "question": "What is the default view when printing a document",
  "choices": ["portrait", "landscape", "page setup", "print page"],
  "answer": "portrait"
},
{
  "question": "Month of May is declared as Electrical Safety Month as declared by former President Aquino, what proclamation number is this",
  "choices": ["7920", "9136", "94", "193"],
  "answer": "193"
},
{
  "question": "It is also known as Energy Efficiency and Conservation Act",
  "choices": ["R.A 11285", "R.A 11361", "R.A 10968", "R.A 7832"],
  "answer": "R.A 11285"
},
{
  "question": "How many bits make up the data path of a 30-pin SIMM?",
  "choices": ["12", "8", "32", "64"],
  "answer": "8"
},
{
  "question": "The hydrometer is an instrument which uses one of the following theorems. Which one",
  "choices": ["Bernoulli's energy theorem", "Pascal’s principle", "Archimedes Principle", "Reynold’s Principle"],
  "answer": "Archimedes Principle"
},
{
  "question": "On what plane is the Mollier diagram plotted?",
  "choices": ["p-V", "p-T", "h-s", "s-u"],
  "answer": "h-s"
},
{
  "question": "Burning of wood is what type of change?",
  "choices": ["Chemical", "Physical", "Both chemical and physical", "none of there"],
  "answer": "Chemical"
},
{
  "question": "The purpose of nickel in steel alloying is to increase____",
  "choices": ["Brittleness", "Toughness, Hardness, Corrosion resistance, and reduce thermal expansion", "high-temperature strength", "Strength"],
  "answer": "Toughness, Hardness, Corrosion resistance, and reduce thermal expansion"
},
{
  "question": "In an ideal refrigeration-cycle, liquid leaves the condenser and is expanded in such a manner that enthalpy of the liquid is equal to the enthalpy of the resolution saturated mixture. This type of expansion is known as____process?",
  "choices": ["a throttling", "a compression", "an isothermal", "a reversible"],
  "answer": "a throttling"
},
{
  "question": "Which of the following is most likely to prove that a substance is inorganic?",
  "choices": [
      "The substance evaporates in room temperature and pressure",
      "The substance is heated together with copper oxide and the resulting gases are found to have no effect on limestone.",
      "Analysis shows that the substance contains hydrogen.",
      "The substance floats in the water"
  ],
  "answer": "The substance is heated together with copper oxide and the resulting gases are found to have no effect on limestone."
},
{
  "question": "Which of the following elements and compounds is unstable in its pure form?",
  "choices": ["Helium (He)", "Neon (Ne)", "Carbon Dioxide (CO2)", "Sodium (Na)"],
  "answer": "Sodium (Na)"
},
{
  "question": "What is the ratio of the ultimate failure strain to the yielding strain?",
  "choices": ["Poisson’s ratio", "Ductility", "Resilience", "Fatigue"],
  "answer": "Ductility"
},
{
  "question": "What refers to the point in which bending moment changes sign through a zero value in strength of materials?",
  "choices": ["Zero stress point", "Critical point", "Point of contra-flexure", "Point of inflection"],
  "answer": "Point of contra-flexure"
},
{
  "question": "What is the device used to determine the specific gravity of the liquids?",
  "choices": ["Psychrometer", "Hydrometer", "Manometer", "Venturi meter"],
  "answer": "Hydrometer"
},
{
  "question": "What physical property of a material refers to the point at which material liquefies or solidifies on cooling?",
  "choices": ["Curie point", "Specific heat", "Melting point", "Refractive Index"],
  "answer": "Melting point"
},
{
  "question": "Which of the following is TRUE for water at a reference temperature when enthalpy is zero",
  "choices": ["Internal energy is negative", "Entropy is nonzero", "Specific volume is zero", "Vapor pressure is zero"],
  "answer": "Internal energy is negative"
},
{
  "question": "The Gauge pressure in a car tire is 305kpa when its temperature is 15deg. Celsius. After running at high speed, the tire has heated up and its pressure is 360kPa. What is then the temperature of the gas in the tire? Assume pressure to  be 101kPa",
  "choices": ["42 deg", "54 deg", "59 deg", "47 deg"],
  "answer": "54 deg"
},
{
  "question": "In Rigid Metal Conduit(RMC) wiring, conduits shall be supported at least every ______ mm",
  "choices": ["1000", "1500", "3000", "1800"],
  "answer": "3000"
},
{
  "question": "The “earth” best defines of which of the following term",
  "choices": ["bonding", "ground electrode", "ground", "grounded conductor"],
  "answer": "ground"
},
{
  "question": "The usual function of a disconnect switches in high voltage circuits is to __",
  "choices": [
      "Open the circuit in the event of an overload",
      "Open or close the circuit under load",
      "Maintain continuity of service",
      "Isolate from energized buses, equipment which are not in service"
  ],
  "answer": "Isolate from energized buses, equipment which are not in service"
},
{
  "question": "An instruction that causes the data in the accumulator to be moved to the memory or a peripheral register",
  "choices": ["FETCH", "STORE", "LOAD", "LOOP"],
  "answer": "STORE"
},
{
  "question": "Who is responsible for ensuring that the project is completed successfully as measured by time, cost, performance and stakeholder satisfaction",
  "choices": ["Functional manager", "Project manager", "Chief engineer", "Department supervisor"],
  "answer": "Project manager"
},
{
  "question": "It is the process of unifying the power of technology with entrepreneurial skills and capabilities:",
  "choices": ["Entrepreneurship", "Technopreneurship", "Innovations", "Business Management"],
  "answer": "Technopreneurship"
},
{
  "question": "At What annual interest rate is P500 one year ago equivalent to P600 today?",
  "choices": ["18%", "20%", "17%", "23%"],
  "answer": "20%"
},
{
  "question": "In R.A 9136, what does PSALM mean?",
  "choices": [
      "Power System Assets and liabilities Management Corporation",
      "Power Sector Assets and Liabilities Management Corporation",
      "Power System Assets and Liabilities Management Commission",
      "Power Sector Assets and Liabilities Management Commission"
  ],
  "answer": "Power Sector Assets and Liabilities Management Corporation"
},
{
  "question": "The leaning tower of Pisa is 54.5m tall. Supposedly Galileo investigates the behavior of falling objects by dropping them from top of this tower and timing their descent. How long in seconds would it take an object to fall 54.5 m if air effects are negligible.",
  "choices": ["3.49", "33.3", "34.9", "3.33"],
  "answer": "3.33"
},
{
  "question": "The ratio of the moment of inertia of the cross-section of the beam to the section modulus.",
  "choices": [
      "Equal to the radius gyration",
      "Equal to the area of the cross-section",
      "Measure a distance",
      "Dependent on the modulus of elasticity of the beam measure"
  ],
  "answer": "Measure a distance"
},
{
  "question": "An open system of First law of Thermodynamics should be  utilized for all the following. Except____",
  "choices": ["A turbine", "A piston-cylinder device with no inlet/outlet", "A compressor", "A nozzle"],
  "answer": "A piston-cylinder device with no inlet/outlet"
},
{
  "question": "On systems where there are multiple operating system, the decision to load a particular one is done by",
  "choices": ["File control block", "Process control block", "boot loader", "bootstrap"],
  "answer": "boot loader"
},
{
  "question": "Is an act of sending e-mail or creating web pages that are designed to collect an individual’s online bank, credit card, or other login information",
  "choices": ["Phishing", "Spam", "Hacking", "Malware"],
  "answer": "Phishing"
},
{
  "question": "What do you call a person who gains illegal access to a computer system?",
  "choices": ["Computer enthusiasts", "Electronic enthusiasts", "Hacker", "Computer pirate"],
  "answer": "Hacker"
},
{
  "question": "Which of the following computer programs is not considered open-source software?",
  "choices": ["Firefox", "Microsoft", "linux", "OpenOffice.org"],
  "answer": "Microsoft"
},
{
  "question": "A technician has installed a new video card and the computer will now only boot into VGA mode. Which of the following may be the cause of the problem?",
  "choices": ["There is an operating system incompatibility", "The external monitor is not compatible", "The new card is not DVI compatible", "The incorrect drivers are installed"],
  "answer": "The incorrect drivers are installed"
},
{
  "question": "_____is a device converting computer digital signals to analog signals for transmission over copper telephone wires and then back to digital signals.",
  "choices": ["Fax Machine", "Telegram", "Telephone", "Modem"],
  "answer": "Modem"
},
{
  "question": "Which of the following is an instruction that causes data to be brought from memory into an accumulator register?",
  "choices": ["LOAD", "LOOP", "FETCH", "JUMP"],
  "answer": "LOAD"
},
{
  "question": "What term is used to describe storing of data into a memory?",
  "choices": ["Writing", "Loading", "Reading", "Memorizing"],
  "answer": "Writing"
},
{
  "question": "A megabyte is exactly ___________ bytes.",
  "choices": ["1,000,000", "999,999", "1,000,001", "1,048,576"],
  "answer": "1,048,576"
},
{
  "question": "The amount of property on which a willing buyer will pay to a willing seller for the property when neither one is under compulsion to buy or sell is called ________.",
  "choices": ["Fair value", "Market value", "Goodwill value", "Book value"],
  "answer": "Market value"
},
{
  "question": "To be effective, an omnidirectional alarm have a minimum loudness of 70 dB. If it is to be effective 60m away, what is the most nearly minimum power required?",
  "choices": ["0.1W", "0.2W", "0.3W", "0.5W"],
  "answer": "0.5W"
},
{
  "question": "A simply supported beam, 10m long carries a uniform distributed load of 20kN/m. What is the value of the maximum moment of the beam due to the load?",
  "choices": ["10000 kN-m", "5000kN-m", "2000 kN-m", "250 kN-m"],
  "answer": "250 kN-m"
},
{
  "question": "A copper sphere 0.3m in diameter radiates power through a vacuum to an environment at 273K. The emissivity of copper is 0.15, and the sphere is at 60 deg C. The power radiated is most nearly _____",
  "choices": ["28W", "30W", "37W", "53W"],
  "answer": "30W"
},
{
  "question": "Compute the benefit cost ratio of the following project. Project cost= P120,000. Gross income = P35000/year. Operating cost = P8000/year, Salvage value = 0, Life of Project = 10 years, Rate of interest= 15%",
  "choices": ["1.13", "4.13", "0.13", "2.13"],
  "answer": "1.13"
},
{
  "question": "In a queueing system that has an arrival rate of 5 customers/hr, the expected waiting time for any customer in the system, including service time in 40min. What is the expected number of customers in the system under steady-state conditions?",
  "choices": ["5/40", "2/15", "8", "10/3"],
  "answer": "10/3"
},
{
  "question": "Considering a queueing system with three servers, such that the mean service rate for each busy server is 2 customers/hr. If the mean arrival rate of customers is 5/h, what is the expected fraction of total time that all servers will be busy? Assume steady-state conditions.",
  "choices": ["2/5", "3/5", "5/6", "2/3"],
  "answer": "5/6"
},
{
  "question": "A computer or software on the network that supplies the network with data and storage is called____",
  "choices": ["Mainframe Computer", "Workstation", "Server", "Host computer"],
  "answer": "Host computer"
},
{
  "question": "Which of the following is an alkaline earth metal?",
  "choices": ["Ba", "Ti", "Li", "Na"],
  "answer": "Ba"
},
{
  "question": "In bathtub and shower areas no part of cord connected fixtures, hanging fixtures, lighting track, pendants, or ceiling-suspended (paddle) fans shall be located within a zone measured__ horizontally and__vertically from the top of the bathtub rim on shower stall threshold.",
  "choices": ["1000mm,3000mm", "600mm, 3000mm", "900mm, 2400mm", "800mm, 2500mm"],
  "answer": "900mm, 2400mm"
},
{
  "question": "What do you call the kind of wire used to bind the service drop to the service point?",
  "choices": ["Joint wire", "Splice wire", "Tie wire", "None of these"],
  "answer": "Tie wire"
},
{
  "question": "Macroscopic approach to the study of thermodynamics does require a knowledge of the behavior of individual particles is ____",
  "choices": ["Statistical thermodynamics", "Classical thermodynamics", "Chemical thermodynamics", "Equilibrium thermodynamics"],
  "answer": "Classical thermodynamics"
},
{
  "question": "Section 40 of article IV of RA 7920 is the Penalty Clause, states that any person who shall violate any of the provisions of this Act shall be guilty of misdemeanor and shall, upon conviction be sentenced to a fine of not less than ____ not more than P50000 or imprisonment for a period not less than 6 months nor more than 5 years or both at the discretion of the court",
  "choices": ["P10000", "P15000", "P25000", "P30000"],
  "answer": "P10000"
},
{
  "question": "The change that the system undergoes from one equilibrium state to another is known as ____",
  "choices": ["Path", "Process", "Enthalpy Change", "Entropy Change"],
  "answer": "Process"
},
{
  "question": "What is the entropy of a pure substance at a temperature absolute zero?",
  "choices": ["Unity", "Zero", "Infinity", "Undefined"],
  "answer": "Zero"
},
{
  "question": "XYZ Corporation is applying for a short term loan. In reviewing XYZ Corporation’s financial records, bank ABC finds a current ratio of 2.0, an acid test ratio of 0.5, and an account receivable period of 70 days, What should the banker do?\n I. Suggest the XYZ Corporation lower its inventories\n II. Suggest that XYZ Corporation be more aggressive collecting on its invoices",
  "choices": ["I only", "II only", "Either I or II", "Both I and II"],
  "answer": "Both I and II"
},
{
  "question": "What is the stress in an 80-inch round x 16 inch high concrete cylinder (E=2.5x10^6) when the unit deformation is 0.0012 inch/inch",
  "choices": ["500 psi", "8100 psi", "210 psi", "3000 psi"],
  "answer": "3000 psi"
},
{
  "question": "During the stress strain test, the unit deformation at a stress of 35MN/m^2 it was 667 x 10^-6mm. If the proportional limit was MN/m^2. What is the modulus of elasticity?",
  "choices": ["10x10^8N/cm2", "5.8 x 10^6N/in2", "2.1x10^5 N/mm2", "35 x 10^6 N/mm2"],
  "answer": "2.1x10^5 N/mm2"
},
{
  "question": "The rotation or twist in degrees of a shaft, 800mm long subjected to a torque of 80N-m, 20mm in diameter and shear modulus G of 80000 MPa is:",
  "choices": ["3.03", "4.04", "2.92", "1.81"],
  "answer": "2.92"
},
{
  "question": "If Poisson’s ratio of material is 0.2 and because of stress its change in length is 25% of its original length, whereas the its radius is ____%",
  "choices": ["5", "10", "15", "25"],
  "answer": "5"
},
{
  "question": "Pulverized fuel is used for ____.",
  "choices": ["Better Burning", "More Calorific Value", "Less Radiation loss", "Medium Sized Units"],
  "answer": "Better Burning"
},
{
  "question": "Which of the following is a conventional source of energy?",
  "choices": ["Coal", "Solar", "Wind", "Tidal"],
  "answer": "Coal"
},
{
  "question": "Which of the following is Not an extensive property?",
  "choices": ["kinetic Energy", "Momentum", "Mass", "Density"],
  "answer": "Density"
},
{
  "question": "What is The term for a deadlock situation that occurs when a program references a different page for almost every instruction and there is Not even enough real memory to hold MOST of the virtual memory?",
  "choices": ["Paging", "Thrashing", "Scanning", "Handshaking"],
  "answer": "Thrashing"
},
{
  "question": "Ceramics are mostly____",
  "choices": ["Carbide", "Oxides", "Nitrides", "All of the above"],
  "answer": "All of the above"
},
{
  "question": "In Molecules of the same composition. What are the variations of atomic arrangements known as?",
  "choices": ["Polymers", "Non-crystalline structures", "Monomers", "Isomers"],
  "answer": "Isomers"
},
{
  "question": "Which of the following is a quasi-equilibrium process?",
  "choices": ["Mixing paint in a can", "Compression of air in a cylinder", "Combustion", "A balloon bursting"],
  "answer": "Compression of air in a cylinder"
},
{
  "question": "The air in a conference room is to be conditioned from its present state of 18degC and 40deg humidity. Select the appropriate conditioning strategy.",
  "choices": ["Heat and dehumidify", "Cool, dehumidify, and then heat", "Heat, dehumidify, and then cool", "Heat and humidify"],
  "answer": "Heat and humidify"
},
{
  "question": "The test used to determine the chemical composition of coal",
  "choices": ["Proximate analysis", "Ultimate analysis", "Orsat analysis", "Stoichiometry"],
  "answer": "Ultimate analysis"
},
{
  "question": "On what plane is the Mollier Diagram plotted?",
  "choices": ["p-V", "p-T", "h-s", "s-u"],
  "answer": "h-s"
},
{
  "question": "What happen in vapor when it turns into liquid?",
  "choices": ["Its energy increases", "Its temperature fall", "It gives energy", "Its temperature increases"],
  "answer": "It gives energy"
},
{
  "question": "Two major types of chemical bonds are observed in chemical bonding: Ionic and covalent. Which of the following has a bond that is the least ionic in Character?",
  "choices": ["NaCl", "CH4", "H2", "H2O"],
  "answer": "H2"
},
{
  "question": "What is the oxidation state of Aluminum?",
  "choices": ["+2", "+3", "-4", "-2"],
  "answer": "+3"
},
{
  "question": "Type of bond that occurs in bronze is _____.",
  "choices": ["Covalent", "Ionic", "Metallic", "Van der waals"],
  "answer": "Metallic"
},
{
  "question": "A certain company is planning to grow 30% during the next fiscal year. What has to increase if this company is to achieve their goal?",
  "choices": ["the ratio of sales to total assets", "the ratio of total assets to equity", "Equity", "Any combination of A,B,C."],
  "answer": "Any combination of A,B,C."
},
{
  "question": "The PEC 2017 edition is approved by board resongaonf _____",
  "choices": ["20", "18", "17", "16"],
  "answer": "18"
},
{
  "question": "In an Ideal refrigeration-cycle, liquid leaves the condenser and is expanded in such a manner that the enthalpy of the liquid is equal to the enthalpy of the resulting saturated mixture. This type of expansion is known as ____ process?",
  "choices": ["A Throttling", "A compression", "An Isothermal", "A reversible"],
  "answer": "A Throttling"
},
{
  "question": "Burning of wood is what type of change?",
  "choices": ["Chemical", "Physical", "Both", "None of this"],
  "answer": "Chemical"
},
{
  "question": "What will be the final value for ISUM in the following? \n ISUM=0 \n DO 10+1,20,3 \n ISUM=ISUM+1 \n 10 CONTINUE",
  "choices": ["3", "30", "50", "70"],
  "answer": "70"
},
{
  "question": "If the P300 is earned in three months in an investment of P12000 what is the annual rate of simple interest?",
  "choices": ["14%", "12%", "10%", "8%"],
  "answer": "10%"
},
{
  "question": "Z Corporation is applying for a short term loan. In reviewing Z Corporation’s financial records, the banker finds a current ratio of 2.0, an acid test ratio of 0.5, and an accounts receivable period of 70 day. What should the banker do?",
  "choices": [
      "Be Concerned that Z corporation will be unable to meet payment",
      "Suggest that Z corporation lower its inventories",
      "Suggest that Z Corporation be more aggressive in collecting on its invoices",
      "Both option B and C"
  ],
  "answer": "Both option B and C"
},
{
  "question": "The rate of heat transfer to the surrounding from a person at rest is about 400 jk/hr Suppose That the ventilation system fails in an auditorium blank 150 people and assuming that the energy goes into the air of volume 120 and 300k and 101kPa, calculate the rate of air temperature change",
  "choices": ["0.83", "0.63", "0.97", "0.79"],
  "answer": "0.79"
},
{
  "question": "Strain is defined as the ratio of ______",
  "choices": [
      "Change in volume to original volume",
      "Change in length to original Length",
      "Change in cross-sectional area to original cross-sectional",
      "Any of the above"
  ],
  "answer": "Any of the above"
},
{
  "question": "Who/What determines priority of projects?",
  "choices": [
      "Project management office",
      "Construction team",
      "Project manager",
      "none of the above"
  ],
  "answer": "Project manager"
},
{
  "question": "A spring with a force constant of 12 lb/ft is compressed by 3 inches. A 0.1 lb ball is placed against the end of the spring which is then released. What is the ball’s velocity when it leaves the spring?",
  "choices": [
      "1.55ft/sec",
      "2.55ft/sec",
      "15.5ft/sec",
      "25.5 ft/sec"
  ],
  "answer": "15.5ft/sec"
},
{
  "question": "A thin lens is made from glass with n=1.5. It has a convex face with a 25cm radius of curvature, and concave face with a 35 cm radius of curvature. What is the focal length and type of the lens?",
  "choices": [
      "Divergin lens, virtual focus, focus length of 100cm",
      "Converging lens, real focus, focus length of 125cm",
      "Diverging lens, virtual focus, focal length of 150cm",
      "Converging lens, real focus, focal length of 175cm"
  ],
  "answer": "Converging lens, real focus, focal length of 175cm"
},
{
  "question": "A man enters a cave, walks 100m north having a sharp turn of 160 degrees and walks 85m. Find the distance from the cave to the last point in meters",
  "choices": [
      "25",
      "100",
      "50",
      "150"
  ],
  "answer": "150"
},
{
  "question": "An amount of 100 thousand pesos was invested seven years ago at 8% compounded yearly. What will be the amount today at 6% inflation rate?",
  "choices": [
      "P113,979.10",
      "P131,797.21",
      "P87,735.38",
      "P78,375.31"
  ],
  "answer": "P113,979.10"
},
{
  "question": "How much should be put in an investment with 14% effective annual rate today to have P12000 in five years",
  "choices": [
      "6713.35",
      "P5,831.63",
      "P6,232.42",
      "P5,966.18"
  ],
  "answer": "P6,232.42"
},
{
  "question": "If a material expands freely due to heating it will develop",
  "choices": [
      "thermal stresses",
      "Tensile stress",
      "Bending",
      "No Stress"
  ],
  "answer": "No Stress"
},
{
  "question": "You are thinking about retirement and you are considering investing money each month so you will have P1,000,000 in 30 years if the nominal annual interest rate is 8% and the interest compounded monthly, what is the amount of monthly investment?",
  "choices": [
      "Php780.95",
      "Php670.98",
      "Php680.8",
      "Php750.89"
  ],
  "answer": "Php670.98"
}
	  

],





  "EE": [

    {
        "question": "A 500 hp, three phase, delta-connected induction motor draws 100 A on each of its terminals under full load. The power source is a wye-connected transformer whose line-to-neutral voltage is 2400 V. Assuming the motor efficiency is 100%, the motor’s power factor is most nearly.",
        "choices": ["0.52", "0.64", "0.80", "0.90"],
        "answer": "0.52"
    },
    {
        "question": "A toroidal core has a mean radius of 0.03 m and a cross-sectional area of 1cm2 , A coil of 100 turns carrying a current of 3 A is wound on the core. The magnetic field intensity,H, proceed by the current are most nearly",
        "choices": ["mmf = 100A·turns and H=1000 A·turns/m", "mmf = 200A·turns and H=1200 A·turns/m", "mmf = 300A·turns and H=1600 A·turns/m", "mmf = (harang ulo) and H=1900 A·turns/m"],
        "answer": "mmf = 300A·turns and H=1600 A·turns/m"
    },
    {
        "question": "Which of the following sorting algorithms is the fastest with a truly random list?",
        "choices": ["Bubble sort", "Insertion sort", "Quicksort", "Selection"],
        "answer": "Quicksort"
    },
    {
        "question": "In operating systems, what is the meaning of the acronym TBL?",
        "choices": ["Table lookaside buffer", "Transposed low buffer", "temporary locked buffer", "Take and look behind buffer"],
        "answer": "Table lookaside buffer"
    },
    {
        "question": "If low head and large quantity of water are available, a power engineer should select",
        "choices": ["Kaplan turbine", "Pelton turbine", "Francis turbine", "None of these"],
        "answer": "Kaplan turbine"
    },
    {
        "question": "The electric energy is directly generated by the combustion of fuel on stationary device by a process, called",
        "choices": ["Magnetohydro dynamic process", "Thermal process", "Nuclear fission process", "All of these"],
        "answer": "Magnetohydro dynamic process"
    },
    {
        "question": "In a transmission line, the conductors take them form of",
        "choices": ["Parabola", "Hyperbola", "Catenary", "Semi circle"],
        "answer": "Catenary"
    },
    {
        "question": "The turbine used for high head in hydro plant is",
        "choices": ["Francis turbine", "Kaplan turbine", "Pelton turbine", "none of these"],
        "answer": "Pelton turbine"
    },
    {
        "question": "The Pelton wheel is",
        "choices": ["Axial flow", "Pressure", "Reaction turbine", "none of these"],
        "answer": "Axial flow"
    },
    {
        "question": "How many locations can be directly addressed by a 32-bit microprocessor?",
        "choices": ["1 GB", "2 GB", "3 GB", "4 GB"],
        "answer": "4 GB"
    },
    {
        "question": "In a Am signal, a 900 kHz carrier is modulated by a music signal that has frequency components from 1 kHz to 10 Khz. The range of the frequencies generated for the upper sidebands is",
        "choices": ["440 kHz to 453 kHz", "890 kHz to 899 kHz", "899 kHz to 910 kHz", "901 kHz to 910 kHz"],
        "answer": "901 kHz to 910 kHz"
    },
    {
        "question": "At steady-state, positive, negative and zero sequence impedance with Zf = 0, always follow the relations",
        "choices": ["Z1>Z2>Z0", "Z1>Z2>Z1", "Z0>Z1>Z2", "None of these"],
        "answer": "Z1>Z2>Z0"
    },
    {
        "question": "A diode can be formed by doping a pure crystal such that",
        "choices": ["An n-type semiconductor is produced", "It becomes an intrinsic semiconductor", "One half of its p-type and the other half is n-type", "A p-type semiconductor is produced"],
        "answer": "One half of its p-type and the other half is n-type"
    },
    {
        "question": "The polarization of the wave is",
        "choices": ["Linear in the x direction", "Linear in the y direction", "Circular", "Elliptical"],
        "answer": "Linear in the x direction"
    },
    {
        "question": "A particle with a charge of Q=1.6x10-13 C is to move between points A and B. The points have a potential difference between them VAB=V. The work required to move the change is. TS:(VAB=3000)",
        "choices": ["4.8x10-10", "4.8x10-14", "16x10-10", "16x10-12"],
        "answer": "4.8x10-10"
    },
    {
        "question": "A charge Q=5x10-3 C is placed in an electric field with the intensity E=5000 V/m, The force on the charge exerted by the field is most nearly. TS(Q=5x10-6)",
        "choices": ["1x10-6 N", "25x10-3 N", "5x10-3 N", "25x10-1 N"],
        "answer": "25x10-3 N"
    },
    {
        "question": "A motor with three poles is operating at 60 Hz. The rotational speed is 1,080 rpm. The ship angular velocity is most nearly",
        "choices": ["π rad/s", "2π/3 rad/s", "2 π Rad/s", "4 π rad/s"],
        "answer": "4 π rad/s"
    },
    {
        "question": "A conductor with a length of 0.4 m carrying a current I is placed in a magnetic field with magnetic flux density of 0.01 T, The field and current direction are orthogonal. If the field exerts a force of 2X10-2 N on the conductor, the current in the conductor is most nearly.",
        "choices": ["1.0 A", "5 A", "10 A", "15 A"],
        "answer": "5 A"
    },
    {
        "question": "In metallic materials electric current occurs due to the movement of electrons in a semiconductor, there",
        "choices": ["Is one type of current flow", "Are two types of current flow", "Are three types of current flow", "Are four types of current"],
        "answer": "Are two types of current flow"
    },
    {
        "question": "Which of the following elements of electrical engineering CANNOT be analyzed by Ohms law?",
        "choices": ["Capacitors", "Insulator", "Transistors", "Resistor"],
        "answer": "Transistors"
    },
    {
        "question": "Where does electro-static shielding occur in a charged spherical shelf?",
        "choices": ["When electrical potential outside spherical shelf is zero", "When electrical potential inside the spherical shell is zero", "When electrical field outside the spherical", "Electrical Field inside the spherical shell"],
        "answer": "Electrical Field inside the spherical shell"
    },
    {
        "question": "A 500V transmission line is categorized as TS(500KV)",
        "choices": ["High Voltage", "Ultra high voltage", "Extra high voltage", "Medium voltage"],
        "answer": "Extra high voltage"
    },
    {
        "question": "Out of the following given choices for polyphase transformer connections, which one will you select for three to two phase conversion?",
        "choices": ["scout", "scout scout", "double scout", "star\\double-data"],
        "answer": "scout"
    },
    {
        "question": "For a Y-Δ transformer Y-side grounded, the zero sequence current",
        "choices": ["Has no path to ground", "Exist in the lines on the Δ-side", "Exist in the line on the Y-side", "Exit in the lines on both Y and Δ"],
        "answer": "Exist in the line on the Y-side"
    },
    {
        "question": "Convergence characteristics of Gauss-Seidel method is",
        "choices": ["Linear", "Super linear", "Quadratic", "Cubic"],
        "answer": "Linear"
    },
    {
        "question": "If real power demand is suddenly increased, frequency of the system will",
        "choices": ["Increase", "Decrease", "Remains same", "None of these"],
        "answer": "Decrease"
    },
    {
        "question": "Who defined electric current and derived a method to measure current?",
        "choices": ["Michael Faraday", "Nikola Tesla", "Andre-Marie Ampere", "Alessandro Antonio Volta"],
        "answer": "Andre-Marie Ampere"
    },
    {
        "question": "Which of the following according to KCL be zero",
        "choices": ["Algebraic sum of currents in close-loop", "Algebraic sum of power in close-loop", "Algebraic sum current entering and leaving a junction", "ulooooooooo"],
        "answer": "Algebraic sum current entering and leaving a junction"
    },
    {
        "question": "What kind of quality is an Electrical potential?",
        "choices": ["Vector quantity", "Tension quantity", "Scalar quantity", "Dimensionless quantity"],
        "answer": "Scalar quantity"
    },
    {
        "question": "Which of the following will happen in a transformer when the number of secondary turns is less than the number of primary turns?",
        "choices": ["The voltage gets stepped up", "The voltage gets stepped down", "The power gets stepped up", "The power gets stepped down"],
        "answer": "The voltage gets stepped down"
    },
    {
        "question": "Which of the following is a correct representation of average value in an AC circuit?",
        "choices": ["RMS value/Form factor", "RMS value x form Factor", "RMS value/Peak Factor", "RMS value x Peck Factor"],
        "answer": "RMS value/Form factor"
    },
    {
        "question": "Which one of the following is the base reason to place the field on the rotor in the alternator?",
        "choices": ["Small power in field", "Insulation of high voltage is made easy on stator than rotor", "Huge power in stator", "Diagonal elements Y-matrix are strengthened by adding"],
        "answer": "Insulation of high voltage is made easy on stator than rotor"
    },
    {
        "question": "Diagonal elements of Y-matrix are strengthened by adding",
        "choices": ["Shunt reactors", "Shunt capacitor", "Loads", "All of these"],
        "answer": "Shunt reactors"
    },
    {
        "question": "A pure semiconductor without doping is called",
        "choices": ["Contaminated", "Extrinsic", "Doped", "Intrinsic"],
        "answer": "Intrinsic"
    },
    {
        "question": "Shunt are generally made of",
        "choices": ["Chakra", "Chakra ni naruto", "Aluminum", "Manganin"],
        "answer": "Manganin"
    },
    {
        "question": "In a shunt motor, what is the relative connection of the armature winding with respect to the field winding?",
        "choices": ["Series", "Parallel - Series", "Series-Parallel", "Parallel"],
        "answer": "Parallel"
    },
    {
        "question": "Which does not belong?",
        "choices": ["Lines per square centimeter", "Flux", "Gauss", "Maxwell per square"],
        "answer": "Flux"
    },
    {
        "question": "When an alternator is loaded suddenly the torque produced in the damper is?",
        "choices": ["Induction Motor", "Induction generator", "Synchronous Motor", "Synchronous generator"],
        "answer": "Induction Motor"
    },
    {
        "question": "If the load angle is increased till 135°, the consequence will be____",
        "choices": ["Loss of synchronism", "No alternator of synchronous", "Increase in stability limit", "Reduction in stability limit"],
        "answer": "Loss of synchronism"
    },
    {
        "question": "Two loads are connected in parallel to a 120 V source. The first load dissipates 5 kW and absorbs 5 KVAR (lagging). The second load dissipates 10 kW and absorbs 10 KVAR (leading). The impedance seen by the 120 V source is most nearly.",
        "choices": ["640∠180", "640∠-18", "910∠-18", "640∠45"],
        "answer": "910∠-18"
    },
    {
        "question": "For a balance 240 V, AC three-phase system, load A = 12 kW at a 0.7 lagging power factor, and load B= 18 KW at a 0.8 leading power factor. What are the total real and reactive powers delivered to the loads by the source?",
        "choices": ["30 kW, 25.8 KVAR leading", "6 kW 25.8 kVAR lagging", "30 kW, 1.26 kVAR leading", "30 kW, 1.26 KVAR lagging"],
        "answer": "30 kW, 1.26 kVAR leading"
    },
    {
        "question": "The flux that links the primary and secondary coils of a transformer varies according to Ø12(t) = 5 mWb sin 377t. The secondary coil contains 500 turns. What is most nearly the secondary voltage, V2?",
        "choices": ["2.5 V sin 377t", "2.5 V cos 377t", "940 V sin 377t", "940 V cos377t"],
        "answer": "940 V cos377t"
    },
    {
        "question": "A coil with an inductance of 11 mH has a current of 5 mA passing through it. The magnetic energy stored in the coil is most nearly",
        "choices": ["0.14 µ", "0.55 µJJ", "1.6 µJ", "5.6 µJ"],
        "answer": "0.14 µ"
    },
    {
        "question": "A toroidal core has a mean radius of 0.03 m and a cross-sectional area of 1 cm². It has a coil of 100 turns wound on it through which passes a current of 3 A. The magnetic field strength, H, is 1591.5 A/m. The core material has a relative permeability of µr = 2; the free space is µo = 4π x 10⁻⁷ H/m. The magnetic flux of core is most nearly",
        "choices": ["0.2 µWb", "0.4 µWb", "0.6 µWb", "0.8 µWb"],
        "answer": "0.4 µWb"
    },
    {
        "question": "A 1 m long conductor is moving steadily with a velocity of 30 in a magnetic field with a flux density, B, of 0.05 T. If the direction of ulo is perpendicular to the magnetic flux, the voltage induced in the conductor is",
        "choices": ["15V", "50V", "100V", "200 V"],
        "answer": "15V"
    },
    {
        "question": "A meter movement has an internal resistance, Rms of 5 and full-scale current, Ifs of 50 µA. The meter is to be used to design a voltmeter with a full-scale voltage, Vfs of 20 V. The value of the resistance R Series that must be connected in series with the meter to achieve the design goal most nearly is",
        "choices": ["2 kΩ", "5 kΩ", "400 kΩ", "500 kΩ"],
        "answer": "400 kΩ"
    },
    {
        "question": "A plant engineer is asked to purchase a standby generator to provide backup power to a process fed by a 600 A power distribution panel. The process uses four 100 hp pumps each with an efficiency of 85%. The three-phase motors driving the pump operate at 480 V and have a power factor of 0.8. What is the minimum size generator that can back up this process in the event of a loss of normal power?",
        "choices": ["300 kW", "350 kW", "440 kW", "500 kW"],
        "answer": "440 kW"
    },
    {
        "question": "A single-phase transformer is rated as 440 V:110 V. If the secondary load is 5.5 Ω resistive and the primary voltage is 440 V, what are the actual primary and secondary currents? Assume an ideal transformer.",
        "choices": ["20 A primary, 5 A secondary", "5 A primary, 20 A secondary", "80 A primary, 20 A secondary", "5 A primary, 80 A secondary"],
        "answer": "5 A primary, 20 A secondary"
    },
    {
        "question": "A wye-connected, three-phase, 50 Hz, 12-pole synchronous alternator develops an effective (rms) line 4 A. This alternator is turned faster to generate 60 Hz voltage. What is the new line voltage for the same rotor current?",
        "choices": ["700V", "1000 V", "1200 V", "1440V"],
        "answer": "1440V"
    },
    {
        "question": "A charge Q=5x10^6C is placed in an electric field with intensity E = 5000 V/m. The force on the charge exerted by the field is most nearly",
        "choices": ["1x10-6N", "25 x10-3N", "5x10-3N", "25 x 10-1N"],
        "answer": "25 x10-3N"
    },
    {
        "question": "A conductor with a length of 0.4 m carrying a current I is placed in a magnetic field with magnetic flux density of 0.01 T. The field and current direction are orthogonal, If the field exerts a force of 2 x 10-2 N on the conductor, the current in the conductor is most nearly",
        "choices": ["1.0 A", "5.0A", "10A", "15A"],
        "answer": "5.0A"
    },
    {
        "question": "An electric point charge of Q= 5 x 10^-10 C is placed in a vacuum. If the permittivity of the free space is 8.854 x 10^-12 F/m, the field strength at a distance of 1 um from the charge is approximately",
        "choices": ["1.2 x 10^12 V/m", "4.5 x 10^12 V/m", "12x 10^12 V/m", "15 x 10^12 V/m"],
        "answer": "4.5 x 10^12 V/m"
    },
    {
        "question": "A motor with three pole pairs is operating at 60 Hz. The rotational speed is 1,080 rpm. The slip angular velocity is most nearly",
        "choices": ["π rad/s", "2π/3 rad/s", "2π Rad/s", "4π rad/s"],
        "answer": "4π rad/s"
    },
    {
        "question": "The transmission line has a per unit length inductance and capacitance of 2.5 x 10^-6 H/m and 1.0 x 10^-9 F/m, respectively, and is terminated with a purely resistive load. The standing wave ratio is measured at the load as 3.0. The load resistance is most nearly",
        "choices": ["25Ω", "50Q", "100Q", "150Q"],
        "answer": "150Q"
    },
    {
        "question": "An exponentially decaying voltage of the form v(t) = 20e^(-t/400x10^-3 s) is applied to a digital circuit input. The trigger voltage is 2 V. How much time is required for this voltage to decay to a value of 2 V?",
        "choices": ["200 ms", "400 ms", "920 ms", "1,800 ms"],
        "answer": "920 ms"
    },
    {
        "question": "A transmission line has a characteristic impedance of 75Ω and is connected to a load with a characteristic impedance of 377Ω. The percentage of the signal voltage transmitted to the load is most nearly",
        "choices": ["10%", "30%", "50%", "100%"],
        "answer": "30%"
    },
    {
        "question": "A particle with a charge of Q =1.6 x 10^-13 C is to move between points A and B. The points have a potential difference between them VAB=V. The work required to move the charge is",
        "choices": ["4.8 x 10^-13 J", "4.8 x 10^-10J", "16 x 10^-10 J", "20 x 10^-10 J"],
        "answer": "4.8 x 10^-10J"
    },
    {
        "question": "Find the value of Q if the reactive power is 10W and the average power is 5W. TS:(10VAR)",
        "choices": ["10", "5", "2", "1"],
        "answer": "2"
    },
    {
        "question": "A sine wave generator is connected to the vertical input of an oscilloscope. The scope screen has a horizontal width of 10 cm and a vertical height of 8 cm. The vertical scale of the oscilloscope is 6 V/cm, and the peak-to-peak amplitude of the wave is 4 cm. The maximum voltage of the wave is most nearly",
        "choices": ["8V", "10V", "30V", "50 V"],
        "answer": "10V"
    },
    {
        "question": "What are the poles of the following voltage function? V(s)=(s^2 +7s +12)/(s^3+7s^2+10s)",
        "choices": ["-3, -4", "0, -3, -4", "-2, , -5", "0, -2, -5"],
        "answer": "0, -2, -5"
    },
    {
        "question": "An ac generator producing 10 V (rms) at 200 rad/s connected in series with a 50-Ω resistor, a 400-mH inductor, and a 200-μF capacitor. The rms current in amperes is:",
        "choices": ["0.125", "0.20", "0.18", "0.135", "0.40"],
        "answer": "0.135"
    },
    {
        "question": "An ac generator producing 10 V (rms) at 200 rad/s connected in series with a 50-Ω resistor, a 400-mH inductor, and a 200-μF capacitor. The rms voltage (in volts) across the capacitor is:",
        "choices": ["2.5", "3.4", "6.7", "10.0", "10.8"],
        "answer": "3.4"
    },
    {
        "question": "A synchronous motor is operated at a bus voltage of 1.5 p.u. and drawing 1.0 p.u. at zero pf leading current. Its synchronous reactance is 0.4 p.u. What is the excitation of the motor?",
        "choices": ["2.4 p.u.", "1.5 p.u.", "1.0 p.u.", "1.9 p.u."],
        "answer": "1.9 p.u."
    },
    {
        "question": "A loop of current carrying wire has a magnetic dipole moment of 5 x 10^-4 A·m². The moment initially is aligned with a 0.5-T magnetic field. To rotate the loop so the moment is perpendicular to the field and hold it in that orientation, you must do work of:",
        "choices": ["0", "2.5x 10^-4J", "-2.5 x 10^-4 J", "1.0 x 10^-3J", "-1.0 x 10^-3J"],
        "answer": "2.5x 10^-4J"
    },
    {
        "question": "A three-phase transformer having a line voltage ratio of 400/33000 Volts is connected in the star-delta. The CTs on the 400V side have a CT ratio of 1000/5. What will be the current through the pilot wire?",
        "choices": ["5x sqrt3 Amp", "5/sqrt3 Amp", "5 Amp", "1/5 Amp"],
        "answer": "5x sqrt3 Amp"
    },
    {
        "question": "A 200-bus power system has 160 P-Q bus. For achieving a load flow solution by Newton-Raphson (N-R) in polar coordinates, the minimum number of simultaneous equations to be solved is",
        "choices": ["359", "334", "357", "340"],
        "answer": "359"
    },
    {
        "question": "What is the voltage across the capacitor when the source voltage is 100 and the Q factor is 10?",
        "choices": ["100V", "10V", "1.000V", "0V"],
        "answer": "1.000V"
    },
    {
        "question": "What is the voltage across the inductor when the source voltage is 200V and the Q factor is 10?",
        "choices": ["100V", "20V", "2,000V", "0V"],
        "answer": "2,000V"
    },
    {
        "question": "The inertia constant H of a machine of 200 MVA is 2 pu, its value corresponding to 400 MVA will be",
        "choices": ["4.0", "2.0", "1.0", "0.50"],
        "answer": "1.0"
    },
    {
        "question": "The maximum demand of a consumer is 4 KW and his daily energy consumption is 40 kWhr. His load factor is",
        "choices": ["0.50", "0.416", "0.20", "0.40"],
        "answer": "0.416"
    },
    {
        "question": "An AM radio station is broadcasting at 30 kW and 85% modulation. The power of the sidebands is most nearly",
        "choices": ["8 kW", "10 kW", "20 kW", "30 kW"],
        "answer": "8 kW"
    },
    {
        "question": "System Black out means",
        "choices": ["All power system collapse", "The entire system or larger part of power system may collapse", "A small part of power system is collapse", "None of these"],
        "answer": "The entire system or larger part of power system may collapse"
    },
    {
        "question": "If the shunt admittance of the transmission line is ignored, the torque angle at which maximum power will occur is:",
        "choices": ["π/4", "-π/2", "π/2", "π"],
        "answer": "π/2"
    },
    {
        "question": "Optimum dispatch is the state that",
        "choices": ["The power system is in optimum condition", "The power system is in prior to any contingency", "The power system is in economical mode of operation", "All of these"],
        "answer": "The power system is in prior to any contingency"
    },
    {
        "question": "Post contingency is the state where",
        "choices": ["Power system violates its limits to the parameter define", "Power system collapse", "Power system is in the most economical", "Power system is in optimum condition"],
        "answer": "Power system violates its limits to the parameter define"
    },
    {
        "question": "A substance whose relative permeability is more than the permeability of free space is?",
        "choices": ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Both paramagnetic and ferromagnetic"],
        "answer": "Both paramagnetic and ferromagnetic"
    },
    {
        "question": "Which of these is NOT representing the operating state of the power system?",
        "choices": ["Optimal Dispatch", "Postal", "Security Dispatch", "State Estimation"],
        "answer": "State Estimation"
    },
    {
        "question": "We desire to make an LC circuit that oscillates at 100 Hz using an inductance of 2.5H. We also need a capacitance of:",
        "choices": ["1 F", "1mF", "1µF", "100 Mf"],
        "answer": "1µF"
    },
    {
        "question": "An LC circuit consists of a 1-µF capacitor and a 4mH inductor, its frequency is approximately:",
        "choices": ["0.025 Hz", "25 Hz", "60 HZ", "2500 Hz"],
        "answer": "2500 Hz"
    },
    {
        "question": "The load must not be connected directly on",
        "choices": ["Transmission line", "Distributor", "Service mains", "L.T. 220 volt line"],
        "answer": "Transmission line"
    },
    {
        "question": "The capacitor bank is installed",
        "choices": [
            "To improve the power factor and voltage magnitude",
            "To decrease the power factor and voltage magnitude",
            "To improve the power factor",
            "To improve the voltage magnitude only"
        ],
        "answer": "To improve the power factor and voltage magnitude"
    },
    {
        "question": "For a detection of the occurrence of the severe synchronizing power surges",
        "choices": ["Impedance relays are best suited", "Reactance relays are best suited", "MHO relays are best suited", "Split-phase relays are best suited"],
        "answer": "MHO relays are best suited"
    },
    {
        "question": "AC system has the following disadvantages over DC system",
        "choices": ["Skin effect exists", "Line regulation is more", "Charging current exists", "Proximity effect exists"],
        "answer": "Charging current exists"
    },
    {
        "question": "A charged capacitor and an inductor are connected in series. At time t = 0 the current is zero, but the capacitor is charged. If T is the period of the resulting oscillations, the next time after t = 0 that the energy stored in the magnetic field of the inductor is a maximum",
        "choices": ["T", "T/4", "T/2", "2T"],
        "answer": "T/4"
    },
    {
        "question": "A charged capacitor and an inductor are connected in series. At time t = 0 the current is zero, but the capacitor is charged. If T is the period of the resulting oscillations, the next time after t = 0 that the energy stored in the electric field of the capacitor is a maximum",
        "choices": ["T", "T/4", "T/2", "2T"],
        "answer": "T/2"
    },
    {
        "question": "A charged capacitor and an inductor are connected in series. At time t = 0 the current is zero, but the capacitor is charged. If T is the period of the resulting oscillations, the next time after t = 0 that the energy stored in the current is a maximum",
        "choices": ["T", "T/4", "T/2", "2T"],
        "answer": "T/4"
    },
    {
        "question": "A charged capacitor and an inductor are connected in series. At time t = 0 the current is zero, but the capacitor is charged. If T is the period of the resulting oscillations, the next time after t = 0 that the energy stored in the inductor is a maximum",
        "choices": ["T", "T/4", "T/2", "2T"],
        "answer": "T/4"
    },
    {
        "question": "A charged capacitor and an inductor are connected in series. At time t = 0 the current is zero, but the capacitor is charged. If T is the period of the resulting oscillations, the next time after t = 0 that the energy stored in the capacitor is a maximum",
        "choices": ["T", "T/4", "T/2", "2T"],
        "answer": "T/2"
    },
    {
        "question": "In AutoCAD, ARRAY command is used to:",
        "choices": ["Draw a circle", "Break line by defining two points", "Make multiple copies of an object in rectangular or circular pattern", "Draw concentric circle"],
        "answer": "Make multiple copies of an object in rectangular or circular pattern"
    },
    {
        "question": "In AutoCAD which command converts discrete objects into polylines?",
        "choices": ["Merge", "Union", "Join", "Add"],
        "answer": "Join"
    },
    {
        "question": "In AutoCAD which command is used in creating ?",
        "choices": ["Spur", "REC", "RET", "ISO"],
        "answer": "REC"
    },
    {
        "question": "In AutoCAD which command is used to create an infinite line?",
        "choices": ["XLINE", "", "", ""],
        "answer": "XLINE"
    },
    {
        "question": "Most commonly used supports for high tension lines is",
        "choices": ["Wooden poles", "Steel poles", "Cross bars", "Latticed steel poles"],
        "answer": "Latticed steel poles"
    },
    {
        "question": "The input devices in CAD can be divided into",
        "choices": ["3 categories", "2 categories", "5 categories", "4 categories"],
        "answer": "3 categories"
    },
    {
        "question": "The characteristics of impedance of a transmission line is given by",
        "choices": ["(L/C)^1/2", "2π(L/C)^1/2", "(LC)^1/2", "LC"],
        "answer": "(L/C)^1/2"
    },
    {
        "question": "The real part of propagation constant of a transmission line is",
        "choices": ["Phase constant", "Attenuation constant", "Stability constant", "Reliability factor"],
        "answer": "Attenuation constant"
    },
    {
        "question": "Long transmission line has a surge impedance of approximately",
        "choices": ["31.4 ohms", "75 ohms", "282 ohms", "400 ohms"],
        "answer": "400 ohms"
    },
    {
        "question": "The sag of a transmission line with 50m span in 1 m. What will be the sag if the height of the transmission line is increased by 20%",
        "choices": ["1.2 m", "2 m", "1.25 m", "1 m"],
        "answer": "1 m"
    },
    {
        "question": "Base load plants are designed to supply power at",
        "choices": ["Low capital cost and low operating cost", "High capital cost and low operating cost", "Low capital cost and high operating cost", "High capital cost and high operating cost"],
        "answer": "High capital cost and low operating cost"
    },
    {
        "question": "Peak load plants are designed to supply power at",
        "choices": ["Low capital cost and low operating cost", "High capital cost and low operating cost", "Low capital cost and high operating cost", "High capital cost and high operating cost"],
        "answer": "Low capital cost and high operating cost"
    },
    {
        "question": "The characteristic equation for a control system is s^2 + 4sK = 0. What must be the range of K so that all of the roots will be real?",
        "choices": ["K ≤ 4", "K ≥ 4", "K ≤ 0", "K ≥ 0"],
        "answer": "K ≤ 4"
    },
    {
        "question": "A linear time-invariant system has a transfer function of H(s) = 1/(s+3). If the system is driven by an impulse signal 5δ(t), what is the response?",
        "choices": ["5e^-3t u(t)", "5 sin 3u(t)", "e^-3ωt", "5 sin (3ωt + 30°)"],
        "answer": "5e^-3t u(t)"
    },
    {
        "question": "The characteristics impedance of a loss-less overhead line has a value of",
        "choices": ["400 to 600 ohms", "40 to 60 ohms", "100 to 200 ohms", "30 to 300 ohms"],
        "answer": "400 to 600 ohms"
    },
    {
        "question": "What is the Nyquist stability criterion for a control system open-loop transfer function?",
        "choices": [
            "There must be no zeros in the right-half plane",
            "The polar plot of G(s) must enclose -1 + j 0.",
            "There must be no poles in the right-half plane.",
            "The polar plot of G(s) must avoid -1 + j 0."
        ],
        "answer": "The polar plot of G(s) must avoid -1 + j 0."
    },
    {
        "question": "In a given AM environment, the highest frequency in the modulating signal is 1000 Hz. The frequency in the AM signal is most nearly",
        "choices": ["49 kHz", "51kHz", "99 kHz", "100 kHz"],
        "answer": "100 kHz"
    },
    {
        "question": "In an AM signal, a 300 W carrier is modulated to the 70% level. The total transmitted power is most nearly",
        "choices": ["130 W", "210 W", "300 W", "370 W"],
        "answer": "370 W"
    },
    {
        "question": "The voltage applied across the resistor was reduced by 50%. The power consumed is reduced by",
        "choices": ["75%", "50%", "25%", "100%"],
        "answer": "75%"
    },
    {
        "question": "A motor connected to a load with inertia 'J' and viscous friction 'B' produces torque which is proportional to the input current 'i'. If the differential equation for the motor and load is: Jd²θ/dt² + Bdθ/dt = Ki. Determine the transfer function between the input current 'i' and the shaft position 'θ'.",
        "choices": ["ks(Js+B)", "kJs+B", "KsJs² + B", "Kss(Js² + B)"],
        "answer": "ks(Js+B)"
    },
    {
        "question": "An open-loop function f(s) is given as f(s) = Ks(s+1)(s+4). What is the location of the poles of f(s) on the real portion of the s-axis?",
        "choices": ["0, -1, -4 rad/s", "-1, -4 rad/s", "0, 1, 4 rad/s", "0"],
        "answer": "0, -1, -4 rad/s"
    },
    {
        "question": "The full load copper loss of a transformer is 1600W. At half load, the copper loss will be",
        "choices": ["1600W", "6400W", "400W", "800W"],
        "answer": "400W"
    },
    {
        "question": "What restrictions must be placed upon the parameter “K” in order to ensure that the system is stable from the characteristic equation: S⁴ + 6S³ + 11S² + K = 0?",
        "choices": ["K>10, K<60", "K<10, K>0", "K>10, K<11", "K<60, K>11"],
        "answer": "K<10, K>0"
    },
    {
        "question": "Determine the damping ratio and undamped natural frequency ωn respectively for the following second order equation: d²y/dt² + 5dy/dt + 9y = 9u",
        "choices": ["⅔, 2 rad/sec", "⅘, 2.5 rad/sec", "⅚, 3 rad/sec", "⅓, 3.5 rad/sec"],
        "answer": "⅚, 3 rad/sec"
    },
    {
        "question": "An impulse when applied to a certain system resulted in an exponential output of t³e^−3t. The transfer function of this system will be",
        "choices": ["undefined", "3/(s+3)³", "6/(s-3)⁴", "6/(s+3)⁴"],
        "answer": "6/(s+3)⁴"
    },
    {
        "question": "A 3cm wavelength radar is located at the origin of a xy-coordinate system. A car located at x=100m and y=200m is heading east (x-direction) at the speed of 120 km/hr. What is the doppler frequency measured by the radar?",
        "choices": ["933.81 Hz", "533.18 hz", "-933.81 hz", "-533.18 Hz"],
        "answer": "-933.81 hz"
    },
    {
        "question": "What is the ampacity of the feeder conduction supplying several motors and other loads",
        "choices": [
            "The sum of the full-load motor currents plus the sum of the current of other loads",
            "The sum of the full-load motor currents plus 125% of other load",
            "125% of the sum of the full-load motor currents plus the sum of the currents of other loads.",
            "The sum of the full-load currents plus the sum of the currents of other loads plus 125 of the full-load current of the largest motor."
        ],
        "answer": "The sum of the full-load currents plus the sum of the currents of other loads plus 125 of the full-load current of the largest motor."
    },
    {
        "question": "Which one does not belong to the technical performance standard of Philippine Distribution Code?",
        "choices": ["plant efficiency", "reliability", "collection efficiency", "Load distribution"],
        "answer": "collection efficiency"
    },
    {
        "question": "Which of the following is not a consideration in surge arrester?",
        "choices": ["Arrester class", "Current rating", "Voltage rating", "Insulation Coordination"],
        "answer": "Insulation Coordination"
    },
    {
        "question": "Which of the following shall be induced in the calculation of the reliability standard indices of the distributor asset by the Philippine Distribution Code?",
        "choices": [
            "Outages that occur in the secondary lines of the distribution system",
            "Planned outages where the customers have been notified at least 3 days prior to be loss of power",
            "Outages that occur in the primary lines of the distribution system",
            "Outages that occur in the transmission line"
        ],
        "answer": "Outages that occur in the primary lines of the distribution system"
    },
    {
        "question": "A manufacturing plant operates with a large number of induction motors. As a result, the plant has a low power factor and is charged more for power. Costs can be reduced by",
        "choices": [
            "Decreasing the plant’s operating voltage",
            "increasing the plant’s resistive load",
            "Adding lagging reactive load",
            "Adding leading reactive load"
        ],
        "answer": "Adding leading reactive load"
    },
    {
        "question": "Diesel power plant is best solution as",
        "choices": ["Peak load", "standby", "Base load", "General Purpose"],
        "answer": "standby"
    },
    {
        "question": "If the dc current is reserved in the control winding of a saturable reactor",
        "choices": ["AC current will decrease", "AC current will increase", "The inductance will decrease", "Same AC current will flow"],
        "answer": "Same AC current will flow"
    },
    {
        "question": "The minimum size of copper conductor for a 230v general illumination branch circuit in a dwelling is ___ mm2",
        "choices": ["1.25", "0.75", "2.0", "3.5"],
        "answer": "3.5"
    },
    {
        "question": "A voltmeter is used to measure the voltage across a resistor. The voltmeter is connected in parallel with the resistor. To obtain an accurate voltage reading, the internal resistance of the voltmeter must be",
        "choices": [
            "Much smaller than the resistance whose voltage is being measured",
            "Equal to the resistance whose voltage is being measured",
            "Equal to twice the resistance whose voltage is being measured",
            "Much greater than the resistance whose voltage is being measured."
        ],
        "answer": "Much greater than the resistance whose voltage is being measured."
    },
    {
        "question": "When an electrons build up pressure at one point is called",
        "choices": ["current flow", "pressure pilling", "ganging", "impedance"],
        "answer": "current flow"
    },
    {
        "question": "Fermi energy is the amount of energy which__",
        "choices": [
            "a hole can have at room temperature",
            "must be a given to hole to move it to variance band",
            "must be given to an electron to move it to the conduction band.",
            "None of the above"
        ],
        "answer": "must be given to an electron to move it to the conduction band."
    },
    {
        "question": "A gang capacitor is a variable capacitor in which capacitance is varied by changing the",
        "choices": ["Dielectric", "number of plates", "plate area", "distance between plates"],
        "answer": "plate area"
    },
    {
        "question": "A thermocouple measures which of the following?",
        "choices": ["Heat flux", "ratio of a temperature to a standard", "absolute temperature", "wind speed"],
        "answer": "ratio of a temperature to a standard"
    },
    {
        "question": "What is the process of heating electrically non-metallic such as plumber plastics, etc?",
        "choices": ["resistive", "capacitive", "dielectric", "induction"],
        "answer": "dielectric"
    },
    {
        "question": "What electrode in a junction transistor corresponds to the cathode in a vacuum tube?",
        "choices": ["base", "emitter", "drain", "collector"],
        "answer": "emitter"
    },
    {
        "question": "In a shunt motor, what is the relative connection of the armature winding with respect to the field winding?",
        "choices": ["series", "Parallel-series", "series-parallel", "parallel"],
        "answer": "parallel"
    },
    {
        "question": "Which does not belong?",
        "choices": ["lines per square centimeter", "flux", "gauss", "maxwell per square centimeter"],
        "answer": "flux"
    },
    {
        "question": "A pure semiconductor without doping is called",
        "choices": ["contaminated", "extrinsic", "doped", "intrinsic"],
        "answer": "intrinsic"
    },
    {
        "question": "Shunts are generally made of",
        "choices": ["constantan", "silver", "aluminum", "manganin"],
        "answer": "manganin"
    },
    {
        "question": "A 500V (Ts. 500KV) transmission line is categorized as",
        "choices": ["high voltage", "ultra high voltage", "extra high voltage", "medium voltage"],
        "answer": "extra high voltage"
    },
    {
        "question": "Out of the following given choices for polyphase transformer connections, which one will you select for three to two phase conversion?",
        "choices": ["scott", "star/star", "double scott", "star/ double-data"],
        "answer": "scott"
    },
    {
        "question": "Where does electro-static shielding occur in a charged spherical shell?",
        "choices": [
            "when electrical potential outside spherical shell is zero",
            "when electrical potential inside the spherical shell is zero",
            "when electrical field outside the spherical shell",
            "electrical field inside the spherical shell"
        ],
        "answer": "electrical field inside the spherical shell"
    },
    {
        "question": "In metallic materials, electric current occurs due to the movement of electrons. In a semiconductor, there",
        "choices": [
            "Is one type of current flow",
            "are two types of current flow",
            "are three types of current flow",
            "are four types of current flow"
        ],
        "answer": "are two types of current flow"
    },
    {
        "question": "Which of the following elements of electrical engineering cannot be analyzed using Ohm’s law?",
        "choices": ["capacitors", "inductors", "transistors", "resistance"],
        "answer": "transistors"
    },
    {
        "question": "What will be the direction of the drift velocity of electrons change with respect to the electric field?",
        "choices": [
            "same as that of electric field",
            "opposite to that of electric field",
            "perpendicular to that of the electric field in a positive direction",
            "perpendicular to that of the electric field a negative direction"
        ],
        "answer": "opposite to that of electric field"
    },
    {
        "question": "Which of the following is correct about the power consumed by R1 and R2 connected in series if the value of R1 is greater than R2",
        "choices": [
            "R1 will consume more power",
            "R2 will consume more power",
            "R1 and R2 will consume more power",
            "The relationship between power consumed cannot be established"
        ],
        "answer": "R1 will consume more power"
    },
    {
        "question": "What kind of quantity is an electrical potential?",
        "choices": ["vector quantity", "scalar quantity", "tensor quantity", "dimensionless quantity"],
        "answer": "scalar quantity"
    },
    {
        "question": "Which of the following will happen in a transformer when the number of secondary turns is less than the number of primary turns?",
        "choices": [
            "the voltage get stepped up",
            "the voltage gets stepped down",
            "The power gets stepped up",
            "The power gets stepped down"
        ],
        "answer": "the voltage gets stepped down"
    },
    {
        "question": "Which of the following is the correct representation of average value in an AC circuit?",
        "choices": ["RMS Value/Form Factor", "RMS VAlue/", "RMS Value/Peak factor", "RMS Value x Peak Factor"],
        "answer": "RMS Value/Form Factor"
    },
    {
        "question": "Who defined electric current and devised a method to measure current?",
        "choices": ["Michael Faraday", "Nikola Tesla", "Andre-Marie Ampere", "Alessandro Antonio Volta"],
        "answer": "Andre-Marie Ampere"
    },
    {
        "question": "Which of the following according to KCL must be zero?",
        "choices": [
            "Algebraic sum of currents in closed-loop",
            "Algebraic sum of power in closed-loop",
            "Algebraic sum of currents entering and leaving a junction",
            "Algebraic sum across the input and output"
        ],
        "answer": "Algebraic sum of currents entering and leaving a junction"
    },
    {
        "question": "Which of the following according to the fundamentals of electrical engineering is correct about the induced emf in the primary of the transformer?",
        "choices": [
            "It is the ratio of primary turns to emf induced per turn",
            "It is the product of primary turns and emf induced per turn",
            "It Is the ratio of secondary tums to emf induced per turn",
            "It is the product of secondary turns and emf induced per turn"
        ],
        "answer": "It is the product of primary turns and emf induced per turn"
    },
    {
        "question": "At resonance condition, the voltage across the capacitor and inductor is____ the source voltage.",
        "choices": ["greater than", "less than", "equal to", "much less than"],
        "answer": "greater than"
    },
    {
        "question": "What happens to the voltage across the capacitor when the q factor increases?",
        "choices": ["increases", "decreases", "remains the same", "becomes zero"],
        "answer": "increases"
    },
    {
        "question": "When charged particle moves at right angles to the magnetic field, then which of the following quantities changes",
        "choices": ["Momentum", "speed", "energy", "moment of inertia"],
        "answer": "Momentum"
    },
    {
        "question": "If the flow of electric current is parallel to the magnetic field, the force will be__",
        "choices": ["Zero", "Infinity", "Maximum", "Half the original value"],
        "answer": "Zero"
    },
    {
        "question": "What is the magnetic field outside a solenoid?",
        "choices": ["Infinity", "half the value of the field inside", "Double the value", "Zero"],
        "answer": "Zero"
    },
    {
        "question": "Effects of hunting are/is___",
        "choices": ["mechanical stress", "surge in current", "rise in temperature", "all of the above"],
        "answer": "all of the above"
    },
    {
        "question": "Using a ___ can be used to limit hunting in a synchronous motor.",
        "choices": ["flywheel", "fault in supply", "sudden change in field current", "all of the above"],
        "answer": "all of the above"
    },
    {
        "question": "The damper winding are placed in___",
        "choices": ["pole shoes", "series", "series with field", "rotor slots"],
        "answer": "pole shoes"
    },
    {
        "question": "Turbo generators do not use damper winding due to___",
        "choices": ["solid steel rotor core", "laminated armature", "soft iron core", "small current flow in pole shoes"],
        "answer": "solid steel rotor core"
    },
    {
        "question": "At synchronous speed, relative speed between rotating air-gap flux and damper is___",
        "choices": ["zero", "Ns", "Lesser than Ns", "More than zero"],
        "answer": "zero"
    },
    {
        "question": "When the rotor speed becomes greater than synchronous speed, which type of torque is produced in damper winding?",
        "choices": ["induction generator", "synchronous generator", "reluctance motor", "induction motor"],
        "answer": "induction generator"
    },
    {
        "question": "Which one of the following is the base reason to place field on rotor in the alternator?",
        "choices": ["small power in field circuit", "insulation of high voltage is made easy on stator on rotor", "huge power in stator", "large current in the stator"],
        "answer": "insulation of high voltage is made easy on stator on rotor"
    },
    {
        "question": "For a Y-DELTA transformer Y-side grounded, the zero sequence current",
        "choices": ["Has no path to ground", "exists in the lines on the delta side", "exists in the line on the Y-side", "Exists in the lines on both Y and Delta"],
        "answer": "exists in the line on the Y-side"
    },
    {
        "question": "Convergence characteristics of Gauss-Seidel method is",
        "choices": ["Linear", "Super linear", "Quadratic", "Cubic"],
        "answer": "Linear"
    },
    {
        "question": "If real power demand is suddenly increased, frequency of the system will",
        "choices": ["increase", "decrease", "remains same", "none of these"],
        "answer": "decrease"
    },
    {
        "question": "A diode can be formed by doping a pure crystal such that",
        "choices": ["An n-type semiconductor is produced", "It becomes an intrinsic semiconductor", "One half of it is p-type and the other half is n-type", "A p-type semiconductor is produced"],
        "answer": "One half of it is p-type and the other half is n-type"
    },
    {
        "question": "The polarization of the wave is",
        "choices": ["Linear in the x direction", "Linear in the y direction", "Circular", "elliptical"],
        "answer": "Linear in the x direction"
    },
    {
        "question": "Convergence of the transmission load flow is always assured in case of",
        "choices": ["newton-raphson method", "Gauss method", "Gauss-seidel method", "Both A and C"],
        "answer": "Both A and C"
    },
    {
        "question": "The most economical load on an underground cable is",
        "choices": ["Equal to the surge loading", "less than the surge loading", "greater than its surge loading", "none of the above"],
        "answer": "less than the surge loading"
    },
    {
        "question": "The positive sequence component of the voltage at the point of fault is zero when it is",
        "choices": ["three phase fault", "L - L fault", "L - L - G fault", "L - G fault"],
        "answer": "three phase fault"
    },
    {
        "question": "The magnetizing inrush current in a transformer is rich in",
        "choices": ["2nd harmonics", "7th harmonics", "3rd harmonics", "5th harmonics"],
        "answer": "2nd harmonics"
    },
    {
        "question": "The fourier transform of a discrete time signal is",
        "choices": ["a periodic function", "a nonperiodic analog", "a nonperiodic discrete function", "periodic if the signal is periodic"],
        "answer": "a periodic function"
    },
    {
        "question": "The fourier transform of a periodic analog signal is",
        "choices": ["the discrete signal", "A continuous time signal", "The sum of discrete and analog signal", "An analog —- incomplete"],
        "answer": "the discrete signal"
    },
    {
        "question": "In an AM signal, a 900 kHz carrier is modulated by a music signal that has frequency components from 1kHz. The range of the frequencies generated for the upper sidebands is",
        "choices": ["440 kHz to 453 kHz", "890 kHz to 899 kHz", "899 kHz to 910 kHz", "901 kHz to 910 kHz"],
        "answer": "901 kHz to 910 kHz"
    },
    {
        "question": "At steady state, positive, negative and zero sequence impedance with Zf = 0 always follow the relations:",
        "choices": ["Z1 > Z2 > Z0", "Z1 < Z2 < Z0"],
        "answer": "Z1 > Z2 > Z0"
    },
    {
        "question": "Capacitor switching is easily done with",
        "choices": ["Oil circuit breaker", "Air blast circuit breaker", "Vacuum circuit breaker", "Both A and B"],
        "answer": "Vacuum circuit breaker"
    },
    {
        "question": "The bandwidth of a baseband channel is designated for use by",
        "choices": ["A single analog or digital carrier", "Two analog or digital carriers", "Two analog and one digital carriers", "Two digital carriers"],
        "answer": "A single analog or digital carrier"
    },
    {
        "question": "Gas turbines can pick up from cold in about",
        "choices": ["2 minutes", "30 minutes", "45 minutes", "60 minutes"],
        "answer": "2 minutes"
    },
    {
        "question": "In subsequent iteration, a voltage controlled bus is treated as a loadbus when its",
        "choices": ["Active power limit is violated", "Voltage limit is violated", "Reactive power limit is violated", "Either A or B"],
        "answer": "Reactive power limit is violated"
    },
    {
        "question": "The conductors used in practice for transmission line is stranded for",
        "choices": ["Providing necessary flexibility for stringing", "reducing the effective resistance", "preventing unwinding", "all of the above"],
        "answer": "Providing necessary flexibility for stringing"
    },
    {
        "question": "The per unit impedances of a transformer referred from the primary and secondary side",
        "choices": ["are not equal", "are equal", "are varying according to their base voltage and MVA", "both B and C"],
        "answer": "are equal"
    },
    {
        "question": "The bus bar of the power system, whose voltage magnitude and angle is not known, is called",
        "choices": ["slack bus", "generator bus", "load bus", "P - |V| bus"],
        "answer": "load bus"
    },
    {
        "question": "The zero sequence magnetizing current of a core type transformer compared to shell type is",
        "choices": ["lower", "higher", "equal", "none of these"],
        "answer": "higher"
    },
    {
        "question": "The zero sequence current in DELTA winding of Y/DELTA transformer is found",
        "choices": ["IF neutral point of Y winding is not earthed", "If neutral point of Y winding is earthed", "Whether the neutral point of the star winding is earthed or not earthed", "none of these"],
        "answer": "If neutral point of Y winding is earthed"
    },
    {
        "question": "A queue is a data structure that processes elements in the following order.",
        "choices": ["First in, first out", "Last in, first out", "Middle in, last out", "First in, Last out"],
        "answer": "First in, first out"
    },
    {
        "question": "How many memory locations can be directly addressed by a 32-bit microprocessor?",
        "choices": ["1 GB", "2 GB", "4 GB", "8 GB"],
        "answer": "4 GB"
    },
    {
        "question": "How many inputs can a multiplexer having two selection lines have?",
        "choices": ["2", "4", "8", "10"],
        "answer": "4"
    },
    {
        "question": "For virtual memory systems, large programs",
        "choices": ["Are executed in memory", "Can be executed using a smaller memory space", "Are paged in and out of unused video memory", "Run faster due to fewer disk accesses"],
        "answer": "Can be executed using a smaller memory space"
    },
    {
        "question": "Which of the following is NOT a programmable register (i.e., register than can be written to and read) in a typical microprocessor?",
        "choices": ["ALU", "PC", "IR", "MAR"],
        "answer": "ALU"
    },
    {
        "question": "In a transmission line, the conductors take the form of",
        "choices": ["Parable", "Hyperbola", "Catenary", "Semi circle"],
        "answer": "Catenary"
    },
    {
        "question": "The turbine used for high head in hydro plant is",
        "choices": ["Francis turbine", "Kaplan turbine", "Pelton turbine", "none of these"],
        "answer": "Pelton turbine"
    },
    {
        "question": "The Pelton wheel is",
        "choices": ["Axial flow impulse turbine", "Pressure turbine", "Reaction turbine", "None of these"],
        "answer": "Axial flow impulse turbine"
    },
    {
        "question": "If low head and large quantity of water are available, a power engineer should select",
        "choices": ["Kaplan turbine", "Pelton turbine", "Francis turbine", "None of these"],
        "answer": "Kaplan turbine"
    },
    {
        "question": "The electric energy is directly generated by the combustion of fuel on a stationary device by a process, called",
        "choices": ["Magnetohydro dynamics", "Thermal process", "Nuclear fission process", "all of these"],
        "answer": "Magnetohydro dynamics"
    },
    {
        "question": "How many ASCII characters can be transmitted in 5.0 seconds in a 64 kbps communication channel? Assume one byte per character is used and no error checking.",
        "choices": ["35 556 characters", "36 409 characters", "40 000 characters", "40 960 characters"],
        "answer": "40 000 characters"
    },
    {
        "question": "The process of converting the contents of the instruction register into control signals to the various logic and functional elements in the processor is accomplished by:",
        "choices": ["Microprogramming", "Pseudocode", "Instruction register decoding", "Pipelining"],
        "answer": "Microprogramming"
    },
    {
        "question": "Which of the following sorting algorithms is the fastest with a truly random list?",
        "choices": ["Bubble sort", "insertion sort", "Quicksort", "Selection sort"],
        "answer": "Quicksort"
    },
    {
        "question": "In operating systems, what is the meaning of the acronym TLB?",
        "choices": ["Table lookaside buffer", "Transposed low buffer", "Temporarily locked buffer", "Target look behind buffer"],
        "answer": "Table lookaside buffer"
    },
    {
        "question": "Wave trap is used to trap waves of",
        "choices": ["higher frequencies entering generator of transformers units", "power frequencies", "Either A or B at a time", "None of these"],
        "answer": "higher frequencies entering generator of transformers units"
    },
    {
        "question": "In power system, the purpose of an inter-connector is to",
        "choices": ["Reduce the SC current", "Improve the stability margin", "Allow the flow of current from one generator to another", "all of the above"],
        "answer": "Allow the flow of current from one generator to another"
    },
    {
        "question": "The generating station with minimum running cost is",
        "choices": ["hydro power station", "the voltage across the feeder", "Thermal power station", "Diesel power station"],
        "answer": "hydro power station"
    },
    {
        "question": "Power plant having the maximum efficiency is",
        "choices": ["Thermal", "Hydro", "Diesel", "Nuclear"],
        "answer": "Nuclear"
    },
    {
        "question": "Tappings in on-load tap changer transformer are provided on",
        "choices": ["LV side", "HV side", "Both LV and HV side", "all of these"],
        "answer": "HV side"
    },
    {
        "question": "The number 2 is entered into A1 in a spread sheet. the formula $A$1 + A1 is entered in cell B1. The contents of cell B1 are then copied and pasted into C1. The number is displayed in cell C1 is.",
        "choices": ["2", "4", "6", "8"],
        "answer": "6"
    },
    {
        "question": "A computer pseudocode program contains the following program segment.\n    X = 0\nFOR T = -1 TO 2\n    X = X + T\nNEXT T\nWhat is the value of X after the segment?",
        "choices": ["2"],
        "answer": "2"
    },
    {
        "question": "A 40 MB hard disk formatted to have 8 sectors and 1024 tracks. The fewest number of bytes needed to store a file on the disk is most nearly",
        "choices": ["1024 bytes", "4882 bytes", "5120 bytes", "8192 bytes"],
        "answer": "5120 bytes"
    },
    {
        "question": "In terms of the line parameters, the characteristic impedance of overhead transmission lines is given by",
        "choices": ["", "", "(B/C)^(1/2)", ""],
        "answer": "(B/C)^(1/2)"
    },
    {
        "question": "The units of B and C constants are repectively in transmission line is",
        "choices": ["mho, mho", "ohm, ohm", "mho, ohm", "ohm, mho"],
        "answer": "ohm, mho"
    },
    {
        "question": "The cause of transient stability is",
        "choices": ["Alternator loosing its excitation", "Switching ON and OFF of the line", "Short Circuit fault", "All of the above"],
        "answer": "All of the above"
    },
    {
        "question": "Transient stability can ------ the use of",
        "choices": ["", "", "Fast acting voltage regulation", "all of the above"],
        "answer": "all of the above"
    },
    {
        "question": "Inductance of a conductor due to its internal flux is",
        "choices": ["2π x 10^(-7) H/m", "(2π x 10^(-7))^(-1) H/m", "(2π x 10^(-7))/7 H/m", "0.5 x 10^(-7) H/m"],
        "answer": "0.5 x 10^(-7) H/m"
    },
    {
        "question": "Inductance between two conductors of diameter D1 and D2 is",
        "choices": ["0.5 x 10^(-7) x (D2/D1) H/m", "2 x 10^(-7) ln (D2/D1) H/m", "10^(-7) ln (D2/D1) H/m", "2π x 10^(-7) ln (D2/D1) H/m"],
        "answer": "2 x 10^(-7) ln (D2/D1) H/m"
    },
    {
        "question": "Ferranti effect that the receiving end voltage on no load is",
        "choices": ["Equal to that at the sending end", "Less than that at the sending end", "More than that at the sending end", "Either B or C"],
        "answer": "More than that at the sending end"
    },
    {
        "question": "A control system has an open loop gain of 10 dB when its phase angle is -180, for whcih of the following margins will the system be stable?",
        "choices": ["-15 dB", "-10 dB", "-5 dB", "+10 dB"],
        "answer": "-15 dB"
    }
	  
	  
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
    questionElement.innerHTML = currentQuestion.question.replace(/\n/g, "<br>");
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

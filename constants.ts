import { Discipline, Subject } from './types';

export const DISCIPLINES: Discipline[] = ['Civil', 'Mechanical', 'Other'];

export const SUBJECTS_BY_DISCIPLINE: Record<Discipline, Subject[]> = {
  Civil: [
    {
      name: '1. Mathematics and Statistics',
      topics: [
        { name: 'A. Analytic geometry', subtopics: [{ name: 'A. Analytic geometry', content: null }] },
        { name: 'B. Single-variable calculus', subtopics: [{ name: 'B. Single-variable calculus', content: null }] },
        { name: 'C. Vector operations', subtopics: [{ name: 'C. Vector operations', content: null }] },
        { name: 'D. Statistics', subtopics: [{ name: 'D. Statistics', content: null }] },
      ],
    },
    {
      name: '2. Ethics and Professional Practice',
      topics: [
        { name: 'A. Codes of ethics', subtopics: [{ name: 'A. Codes of ethics', content: null }] },
        { name: 'B. Professional liability', subtopics: [{ name: 'B. Professional liability', content: null }] },
        { name: 'C. Licensure', subtopics: [{ name: 'C. Licensure', content: null }] },
        { name: 'D. Contracts and contract law', subtopics: [{ name: 'D. Contracts and contract law', content: null }] },
      ],
    },
    {
      name: '3. Engineering Economics',
      topics: [
        { name: 'A. Time value of money', subtopics: [{ name: 'A. Time value of money', content: null }] },
        { name: 'B. Cost', subtopics: [{ name: 'B. Cost', content: null }] },
        { name: 'C. Analyses', subtopics: [{ name: 'C. Analyses', content: null }] },
        { name: 'D. Uncertainty', subtopics: [{ name: 'D. Uncertainty', content: null }] },
      ],
    },
    {
      name: '4. Statics',
      topics: [
        { name: 'A. Resultants of force systems', subtopics: [{ name: 'A. Resultants of force systems', content: null }] },
        { name: 'B. Equivalent force systems', subtopics: [{ name: 'B. Equivalent force systems', content: null }] },
        { name: 'C. Equilibrium of rigid bodies', subtopics: [{ name: 'C. Equilibrium of rigid bodies', content: null }] },
        { name: 'D. Frames and trusses', subtopics: [{ name: 'D. Frames and trusses', content: null }] },
        { name: 'E. Centroid of area', subtopics: [{ name: 'E. Centroid of area', content: null }] },
        { name: 'F. Area moments of inertia', subtopics: [{ name: 'F. Area moments of inertia', content: null }] },
        { name: 'G. Static friction', subtopics: [{ name: 'G. Static friction', content: null }] },
      ],
    },
    {
      name: '5. Dynamics',
      topics: [
        { name: 'A. Kinematics', subtopics: [{ name: 'A. Kinematics', content: null }] },
        { name: 'B. Mass moments of inertia', subtopics: [{ name: 'B. Mass moments of inertia', content: null }] },
        { name: 'C. Force acceleration', subtopics: [{ name: 'C. Force acceleration', content: null }] },
        { name: 'D. Work, energy, and power', subtopics: [{ name: 'D. Work, energy, and power', content: null }] },
      ],
    },
    {
      name: '6. Mechanics of Materials',
      topics: [
        { name: 'A. Shear and moment diagrams', subtopics: [{ name: 'A. Shear and moment diagrams', content: null }] },
        { name: 'B. Stresses and strains', subtopics: [{ name: 'B. Stresses and strains', content: null }] },
        { name: 'C. Deformations', subtopics: [{ name: 'C. Deformations', content: null }] },
        { name: "D. Combined stresses, principal stresses, and Mohr's circle", subtopics: [{ name: "D. Combined stresses, principal stresses, and Mohr's circle", content: null }] },
      ],
    },
    {
      name: '7. Materials',
      topics: [
        { name: 'A. Mix design of concrete and asphalt', subtopics: [{ name: 'A. Mix design of concrete and asphalt', content: null }] },
        { name: 'B. Test methods and specifications of metals, concrete, aggregates, asphalt, and wood', subtopics: [{ name: 'B. Test methods and specifications of metals, concrete, aggregates, asphalt, and wood', content: null }] },
        { name: 'C. Physical and mechanical properties of metals, concrete, aggregates, asphalt, and wood', subtopics: [{ name: 'C. Physical and mechanical properties of metals, concrete, aggregates, asphalt, and wood', content: null }] },
      ],
    },
    {
      name: '8. Fluid Mechanics',
      topics: [
        { name: 'A. Flow measurement', subtopics: [{ name: 'A. Flow measurement', content: null }] },
        { name: 'B. Fluid properties', subtopics: [{ name: 'B. Fluid properties', content: null }] },
        { name: 'C. Fluid statics', subtopics: [{ name: 'C. Fluid statics', content: null }] },
        { name: 'D. Energy, impulse, and momentum of fluids', subtopics: [{ name: 'D. Energy, impulse, and momentum of fluids', content: null }] },
      ],
    },
    {
      name: '9. Surveying',
      topics: [
        { name: 'A. Angles, distances, and trigonometry', subtopics: [{ name: 'A. Angles, distances, and trigonometry', content: null }] },
        { name: 'B. Area computations', subtopics: [{ name: 'B. Area computations', content: null }] },
        { name: 'C. Earthwork and volume computations', subtopics: [{ name: 'C. Earthwork and volume computations', content: null }] },
        { name: 'D. Coordinate systems', subtopics: [{ name: 'D. Coordinate systems', content: null }] },
        { name: 'E. Leveling', subtopics: [{ name: 'E. Leveling', content: null }] },
      ],
    },
    {
      name: '10. Water Resources and Environmental Engineering',
      topics: [
        { name: 'A. Basic hydrology', subtopics: [{ name: 'A. Basic hydrology', content: null }] },
        { name: 'B. Basic hydraulics', subtopics: [{ name: 'B. Basic hydraulics', content: null }] },
        { name: 'C. Pumps', subtopics: [{ name: 'C. Pumps', content: null }] },
        { name: 'D. Water distribution systems', subtopics: [{ name: 'D. Water distribution systems', content: null }] },
        { name: 'E. Flood control', subtopics: [{ name: 'E. Flood control', content: null }] },
        { name: 'F. Stormwater', subtopics: [{ name: 'F. Stormwater', content: null }] },
        { name: 'G. Collection systems', subtopics: [{ name: 'G. Collection systems', content: null }] },
        { name: 'H. Groundwater', subtopics: [{ name: 'H. Groundwater', content: null }] },
        { name: 'I. Water quality', subtopics: [{ name: 'I. Water quality', content: null }] },
        { name: 'J. Testing and standards', subtopics: [{ name: 'J. Testing and standards', content: null }] },
        { name: 'K. Water and wastewater treatment', subtopics: [{ name: 'K. Water and wastewater treatment', content: null }] },
      ],
    },
    {
      name: '11. Structural Engineering',
      topics: [
        { name: 'A. Analysis of statically determinant beams, columns, trusses, and frames', subtopics: [{ name: 'A. Analysis of statically determinant beams, columns, trusses, and frames', content: null }] },
        { name: 'B. Deflection of statically determinant beams, trusses, and frames', subtopics: [{ name: 'B. Deflection of statically determinant beams, trusses, and frames', content: null }] },
        { name: 'C. Column analysis', subtopics: [{ name: 'C. Column analysis', content: null }] },
        { name: 'D. Structural determinacy and stability analysis of beams, trusses, and frames', subtopics: [{ name: 'D. Structural determinacy and stability analysis of beams, trusses, and frames', content: null }] },
        { name: 'E. Elementary statically indeterminate structures', subtopics: [{ name: 'E. Elementary statically indeterminate structures', content: null }] },
        { name: 'F. Loads, load combinations, and load paths', subtopics: [{ name: 'F. Loads, load combinations, and load paths', content: null }] },
        { name: 'G. Design of steel components', subtopics: [{ name: 'G. Design of steel components', content: null }] },
        { name: 'H. Design of reinforced concrete components', subtopics: [{ name: 'H. Design of reinforced concrete components', content: null }] },
      ],
    },
    {
      name: '12. Geotechnical Engineering',
      topics: [
        { name: 'A. Index properties and soil classifications', subtopics: [{ name: 'A. Index properties and soil classifications', content: null }] },
        { name: 'B. Phase relations', subtopics: [{ name: 'B. Phase relations', content: null }] },
        { name: 'C. Laboratory and field tests', subtopics: [{ name: 'C. Laboratory and field tests', content: null }] },
        { name: 'D. Effective stress', subtopics: [{ name: 'D. Effective stress', content: null }] },
        { name: 'E. Stability of retaining structures', subtopics: [{ name: 'E. Stability of retaining structures', content: null }] },
        { name: 'F. Shear strength', subtopics: [{ name: 'F. Shear strength', content: null }] },
        { name: 'G. Bearing capacity', subtopics: [{ name: 'G. Bearing capacity', content: null }] },
        { name: 'H. Foundation types', subtopics: [{ name: 'H. Foundation types', content: null }] },
        { name: 'I. Consolidation and differential settlement', subtopics: [{ name: 'I. Consolidation and differential settlement', content: null }] },
        { name: 'J. Slope stability', subtopics: [{ name: 'J. Slope stability', content: null }] },
        { name: 'K. Soil stabilization', subtopics: [{ name: 'K. Soil stabilization', content: null }] },
      ],
    },
    {
      name: '13. Transportation Engineering',
      topics: [
        { name: 'A. Geometric design', subtopics: [{ name: 'A. Geometric design', content: null }] },
        { name: 'B. Pavement system design', subtopics: [{ name: 'B. Pavement system design', content: null }] },
        { name: 'C. Traffic capacity and flow theory', subtopics: [{ name: 'C. Traffic capacity and flow theory', content: null }] },
        { name: 'D. Traffic control devices', subtopics: [{ name: 'D. Traffic control devices', content: null }] },
        { name: 'E. Transportation planning', subtopics: [{ name: 'E. Transportation planning', content: null }] },
      ],
    },
    {
      name: '14. Construction Engineering',
      topics: [
        { name: 'A. Project administration', subtopics: [{ name: 'A. Project administration', content: null }] },
        { name: 'B. Construction operations and methods', subtopics: [{ name: 'B. Construction operations and methods', content: null }] },
        { name: 'C. Project controls', subtopics: [{ name: 'C. Project controls', content: null }] },
        { name: 'D. Construction estimating', subtopics: [{ name: 'D. Construction estimating', content: null }] },
        { name: 'E. Interpretation of engineering drawings', subtopics: [{ name: 'E. Interpretation of engineering drawings', content: null }] },
      ],
    },
  ],
  Mechanical: [
    {
      name: '1. Mathematics',
      topics: [
        { name: 'Analytic Geometry', subtopics: [
            { 
              name: 'Straight Lines', 
              content: {
                notes: `
<h3 class="text-lg font-semibold mb-2">1. Forms of the Equation of a Straight Line</h3>
<p class="mb-4">The relationship between the x and y coordinates of any point on a line can be expressed by an equation. Several forms are common:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Slope-Intercept Form:</strong> The most common form, expressed as $y = mx + b$.
        <ul class="list-circle list-inside ml-6">
            <li>$m$ is the slope of the line.</li>
            <li>$b$ is the y-intercept, the point where the line crosses the y-axis, i.e., $(0, b)$.</li>
        </ul>
    </li>
    <li><strong>Point-Slope Form:</strong> Used when you know the slope $m$ and a single point $(x_1, y_1)$ on the line. The equation is $y - y_1 = m(x - x_1)$.</li>
    <li><strong>Two-Point Form:</strong> Used when you know two points $(x_1, y_1)$ and $(x_2, y_2)$ on the line. The equation is derived from the point-slope form by first calculating the slope: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. The equation is $(y - y_1) = \\frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$.</li>
    <li><strong>General Form:</strong> Expressed as $Ax + By + C = 0$, where A, B, and C are constants. The slope is $m = -A/B$ and the y-intercept is $b = -C/B$.</li>
</ul>

<h3 class="text-lg font-semibold mb-2">2. Parallel and Perpendicular Lines</h3>
<p class="mb-4">The relationship between the slopes of two lines, $m_1$ and $m_2$, determines if they are parallel or perpendicular.</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Parallel Lines:</strong> Two non-vertical lines are parallel if and only if their slopes are equal. $$m_1 = m_2$$</li>
    <li><strong>Perpendicular Lines:</strong> Two lines are perpendicular if and only if the product of their slopes is -1. This means one slope is the negative reciprocal of the other. $$m_1 \\cdot m_2 = -1 \\quad \\text{or} \\quad m_2 = -\\frac{1}{m_1}$$</li>
</ul>

<h3 class="text-lg font-semibold mb-2">3. Distance Formulas</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Distance Between Two Points:</strong> The distance $d$ between two points $(x_1, y_1)$ and $(x_2, y_2)$ is given by the Pythagorean theorem: $$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$</li>
    <li><strong>Shortest Distance from a Point to a Line:</strong> The shortest distance from a point $(x_0, y_0)$ to a line given by the general equation $Ax + By + C = 0$ is: $$d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$$</li>
</ul>
                `,
                video: "",
                aiVideo: "https://player.vimeo.com/video/1135979648?badge=0&autopause=0&player_id=0&app_id=58479",
                solvedExamples: [
                  {
                    question: "What is the equation of a line that passes through the points $(2, 5)$ and $(4, 11)$?",
                    options: [
                      { text: "$y = 3x - 1$", isCorrect: true },
                      { text: "$y = 2x + 1$", isCorrect: false },
                      { text: "$y = -3x + 11$", isCorrect: false },
                      { text: "$y = 3x + 1$", isCorrect: false }
                    ],
                    explanation: "First, calculate the slope ($m$) using the two points: $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{11 - 5}{4 - 2} = \\frac{6}{2} = 3$. Next, use the point-slope form $y - y_1 = m(x - x_1)$ with the point $(2, 5)$ and the slope $m=3$. This gives $y - 5 = 3(x - 2)$, which simplifies to $y - 5 = 3x - 6$. Adding 5 to both sides gives the final equation in slope-intercept form: $y = 3x - 1$."
                  },
                  {
                    question: "Find the equation of a line that is parallel to the line $y = -2x + 5$ and passes through the point $(3, 4)$.",
                    options: [
                      { text: "$y = -2x + 4$", isCorrect: false },
                      { text: "$y = \\frac{1}{2}x + \\frac{5}{2}$", isCorrect: false },
                      { text: "$y = -2x + 10$", isCorrect: true },
                      { text: "$y = -2x + 5$", isCorrect: false }
                    ],
                    explanation: "Parallel lines have the same slope. The slope of the given line $y = -2x + 5$ is $m = -2$. Use the point-slope form $y - y_1 = m(x - x_1)$ with the point $(3, 4)$ and slope $m=-2$. This gives $y - 4 = -2(x - 3)$, which simplifies to $y - 4 = -2x + 6$. Adding 4 to both sides gives the final equation: $y = -2x + 10$."
                  },
                  {
                    question: "What is the equation of the line that is perpendicular to $3x - 2y = 6$ and passes through the point $(3, -1)$?",
                    options: [
                      { text: "$y = \\frac{3}{2}x - \\frac{11}{2}$", isCorrect: false },
                      { text: "$y = -\\frac{2}{3}x + 1$", isCorrect: true },
                      { text: "$y = \\frac{2}{3}x - 3$", isCorrect: false },
                      { text: "$y = -\\frac{3}{2}x + \\frac{7}{2}$", isCorrect: false }
                    ],
                    explanation: "First, find the slope of the given line by rearranging it into slope-intercept form ($y=mx+b$). $3x - 2y = 6 \\implies -2y = -3x + 6 \\implies y = \\frac{3}{2}x - 3$. The slope is $m_1 = \\frac{3}{2}$. The slope of a perpendicular line, $m_2$, is the negative reciprocal: $m_2 = -\\frac{1}{m_1} = -\\frac{2}{3}$. Now use the point-slope form with point $(3, -1)$ and slope $m_2 = -\\frac{2}{3}$. $y - (-1) = -\\frac{2}{3}(x - 3) \\implies y + 1 = -\\frac{2}{3}x + 2$. Subtracting 1 from both sides gives $y = -\\frac{2}{3}x + 1$."
                  },
                  {
                    question: "Calculate the distance between the points $(-3, 4)$ and $(5, -2)$.",
                    options: [
                      { text: "8", isCorrect: false },
                      { text: "10", isCorrect: true },
                      { text: "12", isCorrect: false },
                      { text: "14", isCorrect: false }
                    ],
                    explanation: "Use the distance formula $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. Substitute the coordinates: $d = \\sqrt{(5 - (-3))^2 + (-2 - 4)^2} = \\sqrt{(8)^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$."
                  },
                  {
                    question: "What is the shortest distance from the point $(4, 5)$ to the line $3x + 4y - 12 = 0$?",
                    options: [
                      { text: "2", isCorrect: false },
                      { text: "3", isCorrect: false },
                      { text: "4", isCorrect: true },
                      { text: "5", isCorrect: false }
                    ],
                    explanation: "Use the formula for the distance from a point $(x_0, y_0)$ to a line $Ax + By + C = 0$: $d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$. Here, $(x_0, y_0) = (4, 5)$, and the line is $3x + 4y - 12 = 0$, so $A=3, B=4, C=-12$. Substitute the values: $d = \\frac{|3(4) + 4(5) - 12|}{\\sqrt{3^2 + 4^2}} = \\frac{|12 + 20 - 12|}{\\sqrt{9 + 16}} = \\frac{|20|}{\\sqrt{25}} = \\frac{20}{5} = 4$."
                  }
                ]
              }
            },
            { name: 'Conics', content: {
                notes: `
<h3 class="text-lg font-semibold mb-2">1. Introduction to Conic Sections</h3>
<p class="mb-4">Conic sections are curves obtained by intersecting a plane with a double-napped cone. Depending on the angle of the plane relative to the cone, four types of curves can be created: circles, ellipses, parabolas, and hyperbolas.</p>
<img src="https://i.imgur.com/7sYa7L7.png" alt="Conic Sections Diagram" class="mx-auto my-4 rounded-lg bg-white">
<h3 class="text-lg font-semibold mb-2">2. General Equation of a Conic Section</h3>
<p class="mb-4">Every conic section can be described by a second-degree equation in two variables:</p>
$$Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$$
<p class="mb-4">where A, B, C, D, E, and F are constants. The term $Bxy$ represents a rotation of the conic. For the FE exam, you will typically deal with conics aligned with the coordinate axes, meaning $B=0$.</p>
<h3 class="text-lg font-semibold mb-2">3. The Discriminant</h3>
<p class="mb-4">When $B=0$, the type of conic can be identified by looking at the coefficients A and C.</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>If $A = C$ (and not zero), the conic is a <strong>Circle</strong>.</li>
    <li>If $A \\cdot C > 0$ and $A \\neq C$, the conic is an <strong>Ellipse</strong>.</li>
    <li>If $A \\cdot C = 0$ (i.e., either A or C is zero, but not both), the conic is a <strong>Parabola</strong>.</li>
    <li>If $A \\cdot C < 0$ (i.e., A and C have opposite signs), the conic is a <strong>Hyperbola</strong>.</li>
</ul>
<p class="mb-4">If the $Bxy$ term is present, a value called the discriminant ($B^2 - 4AC$) is used:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>If $B^2 - 4AC < 0$, it is an Ellipse (or a circle if B=0 and A=C).</li>
    <li>If $B^2 - 4AC = 0$, it is a Parabola.</li>
    <li>If $B^2 - 4AC > 0$, it is a Hyperbola.</li>
</ul>
                `,
                video: "",
                aiVideo: "",
                solvedExamples: [
                    {
                        question: "Identify the type of conic section represented by the equation $3x^2 - 3y^2 + 6x - 12y + 1 = 0$.",
                        options: [
                            { text: "Circle", isCorrect: false },
                            { text: "Ellipse", isCorrect: false },
                            { text: "Parabola", isCorrect: false },
                            { text: "Hyperbola", isCorrect: true }
                        ],
                        explanation: "The general form is $Ax^2 + Cy^2 + Dx + Ey + F = 0$. Here, $A=3$ and $C=-3$. Since $A \\cdot C = (3)(-3) = -9 < 0$, the coefficients have opposite signs. Therefore, the conic section is a hyperbola."
                    },
                    {
                        question: "The equation $x^2 + 4y^2 - 2x - 16y + 13 = 0$ represents which conic section?",
                        options: [
                            { text: "Circle", isCorrect: false },
                            { text: "Ellipse", isCorrect: true },
                            { text: "Parabola", isCorrect: false },
                            { text: "Hyperbola", isCorrect: false }
                        ],
                        explanation: "In the equation, $A=1$ and $C=4$. Since $A \\cdot C = (1)(4) = 4 > 0$ and $A \\neq C$, the conic section is an ellipse."
                    },
                    {
                        question: "What conic is described by the equation $y^2 - 8x + 4y - 4 = 0$?",
                        options: [
                            { text: "Circle", isCorrect: false },
                            { text: "Ellipse", isCorrect: false },
                            { text: "Parabola", isCorrect: true },
                            { text: "Hyperbola", isCorrect: false }
                        ],
                        explanation: "The general form is $Ax^2 + Cy^2 + Dx + Ey + F = 0$. In this equation, there is no $x^2$ term, so $A=0$. The $y^2$ term has a coefficient $C=1$. Since $A \\cdot C = (0)(1) = 0$, the conic section is a parabola."
                    },
                    {
                        question: "The discriminant of the equation $2x^2 - 3xy + 2y^2 - x = 5$ is used to identify the conic. What is the value of the discriminant?",
                        options: [
                            { text: "25", isCorrect: false },
                            { text: "-7", isCorrect: true },
                            { text: "7", isCorrect: false },
                            { text: "-25", isCorrect: false }
                        ],
                        explanation: "The equation is $2x^2 - 3xy + 2y^2 - x - 5 = 0$. The coefficients are $A=2$, $B=-3$, and $C=2$. The discriminant is $B^2 - 4AC = (-3)^2 - 4(2)(2) = 9 - 16 = -7$."
                    },
                    {
                        question: "Based on its discriminant value of -7, the conic section $2x^2 - 3xy + 2y^2 - x = 5$ is a(n):",
                        options: [
                            { text: "Circle (special case)", isCorrect: false },
                            { text: "Ellipse", isCorrect: true },
                            { text: "Parabola", isCorrect: false },
                            { text: "Hyperbola", isCorrect: false }
                        ],
                        explanation: "The discriminant is $B^2 - 4AC = -7$. Since the discriminant is less than 0, the conic section is an ellipse. It cannot be a circle because the $Bxy$ term is not zero."
                    }
                ]
            } },
            { name: 'Circles', content: {
                notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition of a Circle</h3>
<p class="mb-4">A circle is the set of all points in a plane that are at a fixed distance (the radius) from a fixed point (the center).</p>
<h3 class="text-lg font-semibold mb-2">2. Standard Form Equation</h3>
<p class="mb-4">The standard form (or center-radius form) of the equation of a circle is:</p>
$$(x - h)^2 + (y - k)^2 = r^2$$
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>The center of the circle is at the point $(h, k)$.</li>
    <li>The radius of the circle is $r$.</li>
    <li>If the center is at the origin $(0, 0)$, the equation simplifies to $x^2 + y^2 = r^2$.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. General Form Equation</h3>
<p class="mb-4">The general form of the equation of a circle is obtained by expanding the standard form:</p>
$$x^2 + y^2 + Dx + Ey + F = 0$$
<p class="mb-4">To find the center and radius from the general form, you must convert it back to standard form using the method of completing the square.</p>
<p class="mb-4"><strong>Completing the Square Example:</strong></p>
<p class="mb-2">Given: $x^2 + y^2 - 6x + 4y - 12 = 0$</p>
<ol class="list-decimal list-inside space-y-2 mb-4">
    <li>Group x-terms and y-terms: $(x^2 - 6x) + (y^2 + 4y) = 12$</li>
    <li>Complete the square for x: Take half of the x-coefficient (-6/2 = -3) and square it ((-3)^2 = 9). Add this to both sides.</li>
    <li>Complete the square for y: Take half of the y-coefficient (4/2 = 2) and square it (2^2 = 4). Add this to both sides.</li>
    <li>Rewrite: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$</li>
    <li>Factor the perfect square trinomials: $(x - 3)^2 + (y + 2)^2 = 25$</li>
    <li>Identify center and radius: Center is $(3, -2)$ and radius is $r = \\sqrt{25} = 5$.</li>
</ol>
                `,
                video: "",
                aiVideo: "",
                solvedExamples: [
                    {
                        question: "What are the center and radius of the circle with the equation $(x - 5)^2 + (y + 3)^2 = 49$?",
                        options: [
                            { text: "Center: $(-5, 3)$, Radius: 49", isCorrect: false },
                            { text: "Center: $(5, -3)$, Radius: 7", isCorrect: true },
                            { text: "Center: $(-5, 3)$, Radius: 7", isCorrect: false },
                            { text: "Center: $(5, -3)$, Radius: 49", isCorrect: false }
                        ],
                        explanation: "The standard form of a circle's equation is $(x - h)^2 + (y - k)^2 = r^2$. Comparing this to the given equation, we have $h=5$, $k=-3$, and $r^2=49$. Therefore, the center is $(h, k) = (5, -3)$ and the radius is $r = \\sqrt{49} = 7$."
                    },
                    {
                        question: "A circle has its center at the origin and passes through the point $(3, 4)$. What is the equation of the circle?",
                        options: [
                            { text: "$x^2 + y^2 = 5$", isCorrect: false },
                            { text: "$x^2 + y^2 = 7$", isCorrect: false },
                            { text: "$x^2 + y^2 = 25$", isCorrect: true },
                            { text: "$x^2 + y^2 = 16$", isCorrect: false }
                        ],
                        explanation: "The radius is the distance from the center $(0,0)$ to the point $(3,4)$. Using the distance formula, $r = \\sqrt{(3-0)^2 + (4-0)^2} = \\sqrt{9+16} = \\sqrt{25} = 5$. The equation of a circle centered at the origin is $x^2 + y^2 = r^2$. So, the equation is $x^2 + y^2 = 5^2 = 25$."
                    },
                    {
                        question: "Find the center of the circle given by the equation $x^2 + y^2 + 8x - 2y - 8 = 0$.",
                        options: [
                            { text: "$(4, -1)$", isCorrect: false },
                            { text: "$(-4, 1)$", isCorrect: true },
                            { text: "$(8, -2)$", isCorrect: false },
                            { text: "$(-8, 2)$", isCorrect: false }
                        ],
                        explanation: "We need to complete the square. First, group the terms: $(x^2 + 8x) + (y^2 - 2y) = 8$. For x, $(\\frac{8}{2})^2 = 16$. For y, $(\\frac{-2}{2})^2 = 1$. Add these to both sides: $(x^2 + 8x + 16) + (y^2 - 2y + 1) = 8 + 16 + 1$. Factor the trinomials: $(x + 4)^2 + (y - 1)^2 = 25$. From the standard form $(x - h)^2 + (y - k)^2 = r^2$, the center $(h, k)$ is $(-4, 1)$."
                    },
                    {
                        question: "What is the radius of the circle with the equation $x^2 + y^2 + 8x - 2y - 8 = 0$?",
                        options: [
                            { text: "3", isCorrect: false },
                            { text: "4", isCorrect: false },
                            { text: "5", isCorrect: true },
                            { text: "25", isCorrect: false }
                        ],
                        explanation: "From the previous problem, we completed the square to get the standard form: $(x + 4)^2 + (y - 1)^2 = 25$. In this form, the right side is $r^2$. So, $r^2 = 25$, and the radius is $r = \\sqrt{25} = 5$."
                    },
                    {
                        question: "What is the general form of the equation for a circle with center $(2, -6)$ and radius 4?",
                        options: [
                            { text: "$x^2 + y^2 - 4x + 12y + 24 = 0$", isCorrect: true },
                            { text: "$x^2 + y^2 + 4x - 12y + 24 = 0$", isCorrect: false },
                            { text: "$x^2 + y^2 - 4x + 12y + 40 = 0$", isCorrect: false },
                            { text: "$x^2 + y^2 - 4x + 12y + 56 = 0$", isCorrect: false }
                        ],
                        explanation: "Start with the standard form: $(x-h)^2 + (y-k)^2 = r^2$. Substitute the center $(h,k)=(2,-6)$ and radius $r=4$: $(x-2)^2 + (y-(-6))^2 = 4^2$, which is $(x-2)^2 + (y+6)^2 = 16$. Now, expand the terms: $(x^2 - 4x + 4) + (y^2 + 12y + 36) = 16$. Combine constants and move them to the left side: $x^2 + y^2 - 4x + 12y + 4 + 36 - 16 = 0$. This simplifies to $x^2 + y^2 - 4x + 12y + 24 = 0$."
                    }
                ]
            } },
            { name: 'Ellipse', content: {
                notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition of an Ellipse</h3>
<p class="mb-4">An ellipse is the set of all points in a plane, the sum of whose distances from two fixed points (the foci) is a constant.</p>
<h3 class="text-lg font-semibold mb-2">2. Standard Form Equation</h3>
<p class="mb-4">The standard form of the equation of an ellipse with center $(h, k)$ is:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Horizontal Major Axis:</strong> $$\\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1$$ where $a > b > 0$.</li>
    <li><strong>Vertical Major Axis:</strong> $$\\frac{(x - h)^2}{b^2} + \\frac{(y - k)^2}{a^2} = 1$$ where $a > b > 0$.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. Key Properties</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Center:</strong> $(h, k)$</li>
    <li><strong>Major Axis:</strong> The longer axis of the ellipse, with length $2a$. The endpoints are called vertices.</li>
    <li><strong>Minor Axis:</strong> The shorter axis of the ellipse, with length $2b$. The endpoints are called co-vertices.</li>
    <li><strong>Foci (plural of focus):</strong> The two fixed points used to define the ellipse. They lie on the major axis.</li>
    <li><strong>Relationship between a, b, and c:</strong> The distance from the center to each focus is $c$. These values are related by the equation: $$c^2 = a^2 - b^2$$</li>
    <li><strong>Eccentricity ($e$):</strong> A measure of how "oval" an ellipse is. It is defined as the ratio $e = c/a$. For an ellipse, $0 < e < 1$. An eccentricity near 0 means the ellipse is almost a circle, while an eccentricity near 1 means it is very elongated.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">4. Area</h3>
<p class="mb-4">The area of an ellipse is given by the formula:</p>
$$A = \pi a b$$
                `,
                video: "",
                aiVideo: "",
                solvedExamples: [
                    {
                        question: "What are the coordinates of the center of the ellipse given by the equation $\\frac{(x-2)^2}{16} + \\frac{(y+5)^2}{9} = 1$?",
                        options: [
                            { text: "$(-2, 5)$", isCorrect: false },
                            { text: "$(2, -5)$", isCorrect: true },
                            { text: "$(16, 9)$", isCorrect: false },
                            { text: "$(4, 3)$", isCorrect: false }
                        ],
                        explanation: "The standard form is $\\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1$. Comparing this to the given equation, we can see that $h=2$ and $k=-5$. Thus, the center $(h, k)$ is $(2, -5)$."
                    },
                    {
                        question: "For the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$, what is the length of the major axis?",
                        options: [
                            { text: "5", isCorrect: false },
                            { text: "8", isCorrect: false },
                            { text: "10", isCorrect: true },
                            { text: "16", isCorrect: false }
                        ],
                        explanation: "In this equation, $a^2 = 25$ and $b^2 = 16$, so $a=5$ and $b=4$. Since $a^2$ is under the $x^2$ term, the major axis is horizontal. The length of the major axis is $2a = 2(5) = 10$."
                    },
                    {
                        question: "Find the distance from the center to a focus (the value of $c$) for the ellipse $\\frac{(x-1)^2}{169} + \\frac{(y-3)^2}{144} = 1$.",
                        options: [
                            { text: "5", isCorrect: true },
                            { text: "12", isCorrect: false },
                            { text: "13", isCorrect: false },
                            { text: "25", isCorrect: false }
                        ],
                        explanation: "We have $a^2 = 169$ and $b^2 = 144$. The relationship between $a, b,$ and $c$ is $c^2 = a^2 - b^2$. So, $c^2 = 169 - 144 = 25$. Therefore, $c = \\sqrt{25} = 5$."
                    },
                    {
                        question: "An ellipse has a vertical major axis of length 20 and a minor axis of length 12. What is the equation of the ellipse if its center is at the origin?",
                        options: [
                            { text: "$\\frac{x^2}{144} + \\frac{y^2}{400} = 1$", isCorrect: false },
                            { text: "$\\frac{x^2}{36} + \\frac{y^2}{100} = 1$", isCorrect: true },
                            { text: "$\\frac{x^2}{100} + \\frac{y^2}{36} = 1$", isCorrect: false },
                            { text: "$\\frac{x^2}{20} + \\frac{y^2}{12} = 1$", isCorrect: false }
                        ],
                        explanation: "The major axis length is $2a = 20$, so $a = 10$. The minor axis length is $2b = 12$, so $b = 6$. Since the major axis is vertical, $a^2$ goes under the $y^2$ term and $b^2$ goes under the $x^2$ term. The equation is $\\frac{x^2}{b^2} + \\frac{y^2}{a^2} = 1$, which is $\\frac{x^2}{6^2} + \\frac{y^2}{10^2} = 1$, or $\\frac{x^2}{36} + \\frac{y^2}{100} = 1$."
                    },
                    {
                        question: "What is the area of an ellipse with the equation $9x^2 + 4y^2 = 36$?",
                        options: [
                            { text: "$6\\pi$", isCorrect: true },
                            { text: "$12\\pi$", isCorrect: false },
                            { text: "$36\\pi$", isCorrect: false },
                            { text: "$72\\pi$", isCorrect: false }
                        ],
                        explanation: "First, put the equation in standard form by dividing by 36: $\\frac{9x^2}{36} + \\frac{4y^2}{36} = 1$, which simplifies to $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$. From this, we identify $b^2 = 4$ (so $b=2$) and $a^2=9$ (so $a=3$). The area of an ellipse is $A = \\pi ab = \\pi(3)(2) = 6\\pi$."
                    }
                ]
            } },
            { name: 'Parabola', content: {
                notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition of a Parabola</h3>
<p class="mb-4">A parabola is the set of all points in a plane that are equidistant from a fixed point (the focus) and a fixed line (the directrix).</p>
<h3 class="text-lg font-semibold mb-2">2. Standard Form Equations</h3>
<p class="mb-4">The standard form of the equation of a parabola with vertex $(h, k)$ depends on its orientation:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Opens Vertically (Up or Down):</strong> $$(x - h)^2 = 4p(y - k)$$
        <ul class="list-circle list-inside ml-6">
            <li>If $p > 0$, the parabola opens upward.</li>
            <li>If $p < 0$, the parabola opens downward.</li>
        </ul>
    </li>
    <li><strong>Opens Horizontally (Left or Right):</strong> $$(y - k)^2 = 4p(x - h)$$
        <ul class="list-circle list-inside ml-6">
            <li>If $p > 0$, the parabola opens to the right.</li>
            <li>If $p < 0$, the parabola opens to the left.</li>
        </ul>
    </li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. Key Properties</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Vertex:</strong> The point $(h, k)$, which is the turning point of the parabola.</li>
    <li><strong>Axis of Symmetry:</strong> The line that passes through the vertex and focus, dividing the parabola into two symmetric halves. For a vertical parabola, it is $x=h$. For a horizontal parabola, it is $y=k$.</li>
    <li><strong>Focus:</strong> A point located a distance of $|p|$ from the vertex along the axis of symmetry, inside the parabola.</li>
    <li><strong>Directrix:</strong> A line located a distance of $|p|$ from the vertex on the other side from the focus. It is perpendicular to the axis of symmetry.</li>
    <li><strong>The value $p$:</strong> Represents the directed distance from the vertex to the focus.</li>
</ul>
                `,
                video: "",
                aiVideo: "",
                solvedExamples: [
                    {
                        question: "What is the vertex of the parabola given by the equation $(x - 3)^2 = 12(y + 1)$?",
                        options: [
                            { text: "$(-3, 1)$", isCorrect: false },
                            { text: "$(3, -1)$", isCorrect: true },
                            { text: "$(12, 1)$", isCorrect: false },
                            { text: "$(3, 1)$", isCorrect: false }
                        ],
                        explanation: "The standard form for a vertical parabola is $(x - h)^2 = 4p(y - k)$. Comparing this to the given equation, we have $h=3$ and $k=-1$. The vertex is $(h, k) = (3, -1)$."
                    },
                    {
                        question: "A parabola is described by the equation $(y + 2)^2 = -8(x - 5)$. In which direction does this parabola open?",
                        options: [
                            { text: "Up", isCorrect: false },
                            { text: "Down", isCorrect: false },
                            { text: "Left", isCorrect: true },
                            { text: "Right", isCorrect: false }
                        ],
                        explanation: "The equation is of the form $(y - k)^2 = 4p(x - h)$, which is a horizontal parabola. Here, $4p = -8$, which means $p = -2$. Since $p$ is negative, the parabola opens to the left."
                    },
                    {
                        question: "Find the coordinates of the focus of the parabola $x^2 = 16y$.",
                        options: [
                            { text: "$(0, 4)$", isCorrect: true },
                            { text: "$(4, 0)$", isCorrect: false },
                            { text: "$(0, 16)$", isCorrect: false },
                            { text: "$(0, 8)$", isCorrect: false }
                        ],
                        explanation: "The equation is in the form $x^2 = 4py$, which is a simplified version of $(x-0)^2 = 4p(y-0)$. The vertex is at the origin $(0,0)$. We have $4p = 16$, so $p=4$. Since the parabola is of the $x^2$ form, it opens vertically. Because $p>0$, it opens upward. The focus is located a distance $p$ from the vertex along the axis of symmetry (the y-axis). Therefore, the focus is at $(0, 0+p)$, which is $(0, 4)$."
                    },
                    {
                        question: "What is the equation of the directrix for the parabola $(y - 1)^2 = 20(x + 4)$?",
                        options: [
                            { text: "$y = -4$", isCorrect: false },
                            { text: "$x = 1$", isCorrect: false },
                            { text: "$x = -9$", isCorrect: true },
                            { text: "$x = -4$", isCorrect: false }
                        ],
                        explanation: "The vertex is $(h,k) = (-4, 1)$. The equation is for a horizontal parabola opening to the right, since $4p=20$ is positive. We find $p=5$. The focus is $p$ units to the right of the vertex, and the directrix is a vertical line $p$ units to the left of the vertex. The vertex x-coordinate is -4. The directrix is at $x = h - p = -4 - 5 = -9$."
                    },
                    {
                        question: "Write the equation of a parabola with a vertex at $(2, 3)$ and a focus at $(2, 5)$.",
                        options: [
                            { text: "$(y-3)^2 = 8(x-2)$", isCorrect: false },
                            { text: "$(x-2)^2 = 2(y-3)$", isCorrect: false },
                            { text: "$(x-2)^2 = 8(y-3)$", isCorrect: true },
                            { text: "$(y-3)^2 = 2(x-2)$", isCorrect: false }
                        ],
                        explanation: "The vertex is $(h,k) = (2,3)$. The focus is at $(2,5)$. Since the x-coordinates are the same, the parabola opens vertically. The focus is above the vertex, so it opens upward, and $p$ will be positive. The distance from the vertex to the focus is $p = 5 - 3 = 2$. The standard equation for a vertical parabola is $(x-h)^2 = 4p(y-k)$. Plugging in the values, we get $(x-2)^2 = 4(2)(y-3)$, which simplifies to $(x-2)^2 = 8(y-3)$."
                    }
                ]
            } },
            { name: 'Hyperbola', content: {
                notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition of a Hyperbola</h3>
<p class="mb-4">A hyperbola is the set of all points in a plane, the absolute difference of whose distances from two fixed points (the foci) is a constant.</p>
<h3 class="text-lg font-semibold mb-2">2. Standard Form Equations</h3>
<p class="mb-4">The standard form of the equation of a hyperbola with center $(h, k)$ is:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Opens Horizontally (Left and Right):</strong> $$\\frac{(x - h)^2}{a^2} - \\frac{(y - k)^2}{b^2} = 1$$ The term with the positive coefficient is the $x$ term.</li>
    <li><strong>Opens Vertically (Up and Down):</strong> $$\\frac{(y - k)^2}{a^2} - \\frac{(x - h)^2}{b^2} = 1$$ The term with the positive coefficient is the $y$ term.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. Key Properties</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Center:</strong> $(h, k)$</li>
    <li><strong>Transverse Axis:</strong> The axis that connects the two vertices. Its length is $2a$.</li>
    <li><strong>Vertices:</strong> The two turning points of the hyperbola, located on the transverse axis.</li>
    <li><strong>Conjugate Axis:</strong> The axis perpendicular to the transverse axis. Its length is $2b$.</li>
    <li><strong>Foci:</strong> The two fixed points used to define the hyperbola. They lie on the same line as the transverse axis.</li>
    <li><strong>Relationship between a, b, and c:</strong> The distance from the center to each focus is $c$. These values are related by the equation: $$c^2 = a^2 + b^2$$ Note the plus sign, which is different from the ellipse.</li>
    <li><strong>Asymptotes:</strong> Two lines that the branches of the hyperbola approach. They intersect at the center $(h, k)$. Their equations are:
        <ul class="list-circle list-inside ml-6">
            <li>For a horizontal hyperbola: $y - k = \\pm \\frac{b}{a}(x - h)$</li>
            <li>For a vertical hyperbola: $y - k = \\pm \\frac{a}{b}(x - h)$</li>
        </ul>
    </li>
</ul>
                `,
                video: "",
                aiVideo: "",
                solvedExamples: [
                    {
                        question: "Which direction does the hyperbola $\\frac{(y+1)^2}{9} - \\frac{(x-4)^2}{25} = 1$ open?",
                        options: [
                            { text: "Left and Right", isCorrect: false },
                            { text: "Up and Down", isCorrect: true },
                            { text: "It is a circle", isCorrect: false },
                            { text: "It is an ellipse", isCorrect: false }
                        ],
                        explanation: "The standard form of a hyperbola has one positive term and one negative term. The direction of opening is determined by the positive term. Since the $y^2$ term is positive, the hyperbola opens vertically (up and down)."
                    },
                    {
                        question: "What are the coordinates of the center of the hyperbola $4x^2 - 9y^2 - 16x + 18y - 29 = 0$?",
                        options: [
                            { text: "$(-2, -1)$", isCorrect: false },
                            { text: "$(4, 9)$", isCorrect: false },
                            { text: "$(2, 1)$", isCorrect: true },
                            { text: "$(-4, -9)$", isCorrect: false }
                        ],
                        explanation: "We need to complete the square. Group terms: $(4x^2 - 16x) - (9y^2 - 18y) = 29$. Factor out coefficients: $4(x^2 - 4x) - 9(y^2 - 2y) = 29$. Complete the square: $4(x^2 - 4x + 4) - 9(y^2 - 2y + 1) = 29 + 4(4) - 9(1)$. This becomes $4(x - 2)^2 - 9(y - 1)^2 = 29 + 16 - 9 = 36$. Divide by 36: $\\frac{(x-2)^2}{9} - \\frac{(y-1)^2}{4} = 1$. The center $(h,k)$ is $(2,1)$."
                    },
                    {
                        question: "For the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$, what is the distance from the center to a focus (the value of $c$)?",
                        options: [
                            { text: "3", isCorrect: false },
                            { text: "4", isCorrect: false },
                            { text: "5", isCorrect: true },
                            { text: "7", isCorrect: false }
                        ],
                        explanation: "From the equation, $a^2 = 16$ and $b^2 = 9$. For a hyperbola, the relationship is $c^2 = a^2 + b^2$. So, $c^2 = 16 + 9 = 25$. Therefore, $c = \\sqrt{25} = 5$."
                    },
                    {
                        question: "What are the equations of the asymptotes for the hyperbola $\\frac{(x-3)^2}{16} - \\frac{(y+2)^2}{9} = 1$?",
                        options: [
                            { text: "$y+2 = \\pm \\frac{4}{3}(x-3)$", isCorrect: false },
                            { text: "$y+2 = \\pm \\frac{3}{4}(x-3)$", isCorrect: true },
                            { text: "$y-2 = \\pm \\frac{3}{4}(x+3)$", isCorrect: false },
                            { text: "$y-3 = \\pm \\frac{9}{16}(x+2)$", isCorrect: false }
                        ],
                        explanation: "This is a horizontal hyperbola with center $(h,k) = (3, -2)$. We have $a^2=16 \\implies a=4$ and $b^2=9 \\implies b=3$. The formula for the asymptotes of a horizontal hyperbola is $y-k = \\pm \\frac{b}{a}(x-h)$. Substituting the values gives $y - (-2) = \\pm \\frac{3}{4}(x-3)$, which simplifies to $y+2 = \\pm \\frac{3}{4}(x-3)$."
                    },
                    {
                        question: "A hyperbola has vertices at $(0, 2)$ and $(0, -2)$ and foci at $(0, 3)$ and $(0, -3)$. What is its equation?",
                        options: [
                            { text: "$\\frac{y^2}{4} - \\frac{x^2}{5} = 1$", isCorrect: true },
                            { text: "$\\frac{x^2}{4} - \\frac{y^2}{5} = 1$", isCorrect: false },
                            { text: "$\\frac{y^2}{4} - \\frac{x^2}{9} = 1$", isCorrect: false },
                            { text: "$\\frac{y^2}{9} - \\frac{x^2}{4} = 1$", isCorrect: false }
                        ],
                        explanation: "The vertices and foci are on the y-axis, so it's a vertical hyperbola centered at the origin. The distance from the center to a vertex is $a=2$. The distance from the center to a focus is $c=3$. We find $b^2$ using $c^2 = a^2 + b^2$, so $3^2 = 2^2 + b^2 \\implies 9 = 4 + b^2 \\implies b^2 = 5$. The standard equation for a vertical hyperbola is $\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1$. Substituting the values for $a^2$ and $b^2$, we get $\\frac{y^2}{4} - \\frac{x^2}{5} = 1$."
                    }
                ]
            } }
          ] 
        },
        { 
          name: 'Calculus', 
          subtopics: [
            { name: 'Limits', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition of a Limit</h3>
<p class="mb-4">The limit of a function $f(x)$ as $x$ approaches a value $c$, denoted as $\\lim_{x \\to c} f(x) = L$, represents the value that $f(x)$ gets arbitrarily close to as $x$ gets arbitrarily close to $c$. The function does not need to be defined at $x=c$ for the limit to exist.</p>
<h3 class="text-lg font-semibold mb-2">2. Methods for Finding Limits</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Direct Substitution:</strong> If the function is continuous at $x=c$, the limit can be found by simply plugging in the value: $\\lim_{x \\to c} f(x) = f(c)$.</li>
    <li><strong>Factoring and Canceling:</strong> If direct substitution results in an indeterminate form like $\\frac{0}{0}$, try factoring the numerator and denominator to cancel common factors.</li>
    <li><strong>Conjugate Method:</strong> For limits involving square roots that result in $\\frac{0}{0}$, multiply the numerator and denominator by the conjugate of the expression containing the root.</li>
    <li><strong>Limits at Infinity:</strong> To find $\\lim_{x \\to \\infty} f(x)$, divide every term in the numerator and denominator by the highest power of $x$ in the denominator.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. L'Hôpital's Rule</h3>
<p class="mb-4">L'Hôpital's Rule is a powerful method for evaluating limits that result in indeterminate forms $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$. If $\\lim_{x \\to c} f(x) = \\lim_{x \\to c} g(x) = 0$ or $\\pm\\infty$, then:</p>
$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$
<p class="mb-4">provided the limit on the right side exists.</p>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Evaluate the limit: $\\lim_{x \\to 2} (3x^2 - 5x + 1)$",
                  options: [
                    { text: "3", isCorrect: true },
                    { text: "1", isCorrect: false },
                    { text: "23", isCorrect: false },
                    { text: "Does not exist", isCorrect: false }
                  ],
                  explanation: "Since this is a polynomial function, it is continuous everywhere. We can use direct substitution: $3(2)^2 - 5(2) + 1 = 3(4) - 10 + 1 = 12 - 10 + 1 = 3$."
                },
                {
                  question: "Find the limit: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$",
                  options: [
                    { text: "0", isCorrect: false },
                    { text: "6", isCorrect: true },
                    { text: "3", isCorrect: false },
                    { text: "Infinity", isCorrect: false }
                  ],
                  explanation: "Direct substitution gives $\\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$, which is an indeterminate form. We can factor the numerator: $\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3}$. Cancel the $(x-3)$ terms: $\\lim_{x \\to 3} (x + 3)$. Now substitute $x=3$: $3 + 3 = 6$."
                },
                {
                  question: "Use L'Hôpital's Rule to evaluate the limit: $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$",
                  options: [
                    { text: "0", isCorrect: false },
                    { text: "1", isCorrect: true },
                    { text: "Infinity", isCorrect: false },
                    { text: "Does not exist", isCorrect: false }
                  ],
                  explanation: "Direct substitution gives $\\frac{\\sin(0)}{0} = \\frac{0}{0}$. This is an indeterminate form, so we can apply L'Hôpital's Rule. Take the derivative of the numerator and the denominator: $\\frac{d}{dx}(\\sin(x)) = \\cos(x)$ and $\\frac{d}{dx}(x) = 1$. The new limit is $\\lim_{x \\to 0} \\frac{\\cos(x)}{1}$. Now, by direct substitution: $\\frac{\\cos(0)}{1} = \\frac{1}{1} = 1$."
                },
                {
                  question: "Evaluate the limit: $\\lim_{x \\to \\infty} \\frac{3x^2 + 2x - 1}{5x^2 - 4x + 7}$",
                  options: [
                    { text: "0", isCorrect: false },
                    { text: "$\\frac{3}{5}$", isCorrect: true },
                    { text: "$\\infty$", isCorrect: false },
                    { text: "$-\\frac{1}{7}$", isCorrect: false }
                  ],
                  explanation: "For limits at infinity of rational functions, we can compare the degrees of the numerator and denominator. Since the degrees are the same (both are 2), the limit is the ratio of the leading coefficients. Therefore, the limit is $\\frac{3}{5}$."
                },
                {
                  question: "Find the limit: $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$",
                  options: [
                    { text: "4", isCorrect: false },
                    { text: "2", isCorrect: false },
                    { text: "$\\frac{1}{4}$", isCorrect: true },
                    { text: "$\\frac{1}{2}$", isCorrect: false }
                  ],
                  explanation: "Direct substitution gives $\\frac{\\sqrt{4}-2}{4-4} = \\frac{0}{0}$. We can use the conjugate method. Multiply the numerator and denominator by $(\\sqrt{x} + 2)$: $\\lim_{x \\to 4} \\frac{(\\sqrt{x} - 2)(\\sqrt{x} + 2)}{(x - 4)(\\sqrt{x} + 2)} = \\lim_{x \\to 4} \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)}$. Cancel the $(x-4)$ terms: $\\lim_{x \\to 4} \\frac{1}{\\sqrt{x} + 2}$. Now substitute $x=4$: $\\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$."
                }
              ]
            } }, 
            { name: 'Derivative', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition of the Derivative</h3>
<p class="mb-4">The derivative of a function $f(x)$, denoted as $f'(x)$ or $\\frac{dy}{dx}$, represents the instantaneous rate of change of the function with respect to its variable. Geometrically, it gives the slope of the tangent line to the function's graph at a point $x$. The formal definition is:</p>
$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
<h3 class="text-lg font-semibold mb-2">2. Basic Differentiation Rules</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Constant Rule:</strong> $\\frac{d}{dx}(c) = 0$</li>
    <li><strong>Power Rule:</strong> $\\frac{d}{dx}(x^n) = nx^{n-1}$</li>
    <li><strong>Constant Multiple Rule:</strong> $\\frac{d}{dx}(cf(x)) = c f'(x)$</li>
    <li><strong>Sum/Difference Rule:</strong> $\\frac{d}{dx}(f(x) \\pm g(x)) = f'(x) \\pm g'(x)$</li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. Advanced Differentiation Rules</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Product Rule:</strong> $\\frac{d}{dx}(f(x)g(x)) = f'(x)g(x) + f(x)g'(x)$</li>
    <li><strong>Quotient Rule:</strong> $\\frac{d}{dx}\\left(\\frac{f(x)}{g(x)}\\right) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$</li>
    <li><strong>Chain Rule:</strong> Used for composite functions. If $y = f(g(x))$, then $\\frac{dy}{dx} = f'(g(x)) \\cdot g'(x)$.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">4. Derivatives of Common Functions</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Trigonometric:</strong> $\\frac{d}{dx}(\\sin x) = \\cos x$, $\\frac{d}{dx}(\\cos x) = -\\sin x$, $\\frac{d}{dx}(\\tan x) = \\sec^2 x$</li>
    <li><strong>Exponential:</strong> $\\frac{d}{dx}(e^x) = e^x$, $\\frac{d}{dx}(a^x) = a^x \\ln a$</li>
    <li><strong>Logarithmic:</strong> $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$, $\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}$</li>
</ul>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Find the derivative of $f(x) = 5x^4 - 3x^2 + 7x - 2$.",
                  options: [
                    { text: "$20x^3 - 6x + 7$", isCorrect: true },
                    { text: "$20x^4 - 6x^2 + 7$", isCorrect: false },
                    { text: "$5x^3 - 3x + 7$", isCorrect: false },
                    { text: "$4x^3 - 2x + 7$", isCorrect: false }
                  ],
                  explanation: "Apply the power rule and sum/difference rule to each term. $\\frac{d}{dx}(5x^4) = 5(4x^3) = 20x^3$. $\\frac{d}{dx}(-3x^2) = -3(2x) = -6x$. $\\frac{d}{dx}(7x) = 7$. $\\frac{d}{dx}(-2) = 0$. Combining these gives $f'(x) = 20x^3 - 6x + 7$."
                },
                {
                  question: "What is the derivative of $y = x^2 \\sin(x)$?",
                  options: [
                    { text: "$2x \\cos(x)$", isCorrect: false },
                    { text: "$2x\\sin(x) + x^2\\cos(x)$", isCorrect: true },
                    { text: "$2x\\sin(x) - x^2\\cos(x)$", isCorrect: false },
                    { text: "$x^2\\cos(x)$", isCorrect: false }
                  ],
                  explanation: "Use the product rule: $\\frac{d}{dx}(f(x)g(x)) = f'(x)g(x) + f(x)g'(x)$. Let $f(x) = x^2$ and $g(x) = \\sin(x)$. Then $f'(x) = 2x$ and $g'(x) = \\cos(x)$. Applying the rule: $y' = (2x)(\\sin(x)) + (x^2)(\\cos(x)) = 2x\\sin(x) + x^2\\cos(x)$."
                },
                {
                  question: "Find the derivative of $g(t) = \\frac{e^t}{t}$.",
                  options: [
                    { text: "$e^t$", isCorrect: false },
                    { text: "$\\frac{e^t}{t^2}$", isCorrect: false },
                    { text: "$\\frac{e^t(t-1)}{t^2}$", isCorrect: true },
                    { text: "$\\frac{e^t(1-t)}{t^2}$", isCorrect: false }
                  ],
                  explanation: "Use the quotient rule: $\\frac{d}{dt}\\left(\\frac{f(t)}{g(t)}\\right) = \\frac{f'(t)g(t) - f(t)g'(t)}{[g(t)]^2}$. Let $f(t) = e^t$ and $g(t) = t$. Then $f'(t) = e^t$ and $g'(t) = 1$. Applying the rule: $g'(t) = \\frac{(e^t)(t) - (e^t)(1)}{t^2} = \\frac{te^t - e^t}{t^2} = \\frac{e^t(t-1)}{t^2}$."
                },
                {
                  question: "What is the derivative of $h(x) = (x^3 + 2)^5$?",
                  options: [
                    { text: "$5(x^3 + 2)^4$", isCorrect: false },
                    { text: "$15x^2(x^3 + 2)^4$", isCorrect: true },
                    { text: "$5(3x^2)^4$", isCorrect: false },
                    { text: "$15x^2$", isCorrect: false }
                  ],
                  explanation: "Use the chain rule: $\\frac{dy}{dx} = f'(g(x)) \\cdot g'(x)$. The outer function is $f(u) = u^5$ and the inner function is $g(x) = x^3 + 2$. The derivatives are $f'(u) = 5u^4$ and $g'(x) = 3x^2$. Applying the rule: $h'(x) = 5(x^3+2)^4 \\cdot (3x^2) = 15x^2(x^3 + 2)^4$."
                },
                {
                  question: "Find $\\frac{dy}{dx}$ for the equation $x^2 + y^2 = 25$.",
                  options: [
                    { text: "$-\\frac{x}{y}$", isCorrect: true },
                    { text: "$\\frac{x}{y}$", isCorrect: false },
                    { text: "$-2x$", isCorrect: false },
                    { text: "$2y$", isCorrect: false }
                  ],
                  explanation: "Use implicit differentiation. Differentiate both sides with respect to $x$, remembering to treat $y$ as a function of $x$. $\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(25)$. This gives $2x + 2y \\frac{dy}{dx} = 0$. Now, solve for $\\frac{dy}{dx}$: $2y \\frac{dy}{dx} = -2x$, so $\\frac{dy}{dx} = \\frac{-2x}{2y} = -\\frac{x}{y}$."
                }
              ]
            } }, 
            { name: 'Application of Derivatives', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Maxima and Minima (Extrema)</h3>
<p class="mb-4">Derivatives are used to find the maximum and minimum values of a function.</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Critical Points:</strong> A point $c$ in the domain of $f$ is a critical point if either $f'(c) = 0$ or $f'(c)$ is undefined. Local maxima and minima can only occur at critical points.</li>
    <li><strong>First Derivative Test:</strong> Let $c$ be a critical point.
        <ul>
            <li>If $f'(x)$ changes from positive to negative at $c$, then $f$ has a local maximum at $c$.</li>
            <li>If $f'(x)$ changes from negative to positive at $c$, then $f$ has a local minimum at $c$.</li>
        </ul>
    </li>
    <li><strong>Second Derivative Test:</strong> Let $f'(c) = 0$.
        <ul>
            <li>If $f''(c) > 0$, then $f$ has a local minimum at $c$.</li>
            <li>If $f''(c) < 0$, then $f$ has a local maximum at $c$.</li>
            <li>If $f''(c) = 0$, the test is inconclusive.</li>
        </ul>
    </li>
</ul>
<h3 class="text-lg font-semibold mb-2">2. Related Rates</h3>
<p class="mb-4">Related rates problems involve finding the rate of change of one quantity in terms of the rate of change of another. The process usually involves finding an equation that relates the two quantities and then using the chain rule to differentiate both sides with respect to time ($t$).</p>
<h3 class="text-lg font-semibold mb-2">3. Optimization</h3>
<p class="mb-4">Optimization problems involve finding the largest or smallest value a function can take. This is done by modeling the problem with a function and then finding its absolute maximum or minimum value by testing the critical points and endpoints of the domain.</p>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Find the critical points of the function $f(x) = x^3 - 6x^2 + 5$.",
                  options: [
                    { text: "x = 0, x = 4", isCorrect: true },
                    { text: "x = 0, x = 2", isCorrect: false },
                    { text: "x = 2, x = 4", isCorrect: false },
                    { text: "x = 3, x = 6", isCorrect: false }
                  ],
                  explanation: "To find critical points, we first find the derivative: $f'(x) = 3x^2 - 12x$. Then, we set the derivative equal to zero and solve for $x$: $3x^2 - 12x = 0 \\implies 3x(x - 4) = 0$. The solutions are $x = 0$ and $x = 4$. These are the critical points."
                },
                {
                  question: "The function $f(x) = x^3 - 6x^2 + 5$ has a local maximum at which point?",
                  options: [
                    { text: "x = 4", isCorrect: false },
                    { text: "x = 0", isCorrect: true },
                    { text: "x = 2", isCorrect: false },
                    { text: "x = 5", isCorrect: false }
                  ],
                  explanation: "From the previous problem, the critical points are $x=0$ and $x=4$. We use the second derivative test. $f'(x) = 3x^2 - 12x$, so $f''(x) = 6x - 12$. Now test the critical points: $f''(0) = 6(0) - 12 = -12$. Since $f''(0) < 0$, there is a local maximum at $x=0$. $f''(4) = 6(4) - 12 = 12$. Since $f''(4) > 0$, there is a local minimum at $x=4$."
                },
                {
                  question: "The radius of a circle is increasing at a rate of 2 cm/s. At what rate is the area of the circle increasing when the radius is 10 cm?",
                  options: [
                    { text: "$20\\pi$ cm$^2$/s", isCorrect: false },
                    { text: "$40\\pi$ cm$^2$/s", isCorrect: true },
                    { text: "$100\\pi$ cm$^2$/s", isCorrect: false },
                    { text: "$200\\pi$ cm$^2$/s", isCorrect: false }
                  ],
                  explanation: "The area of a circle is $A = \\pi r^2$. We want to find $\\frac{dA}{dt}$. Differentiate the equation with respect to time $t$: $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$. We are given $\\frac{dr}{dt} = 2$ cm/s and we need to find the rate when $r = 10$ cm. Substitute the values: $\\frac{dA}{dt} = 2\\pi (10)(2) = 40\\pi$ cm$^2$/s."
                },
                {
                  question: "What is the maximum value of the function $f(x) = -x^2 + 4x + 1$?",
                  options: [
                    { text: "1", isCorrect: false },
                    { text: "4", isCorrect: false },
                    { text: "5", isCorrect: true },
                    { text: "2", isCorrect: false }
                  ],
                  explanation: "This is a downward-opening parabola, so its maximum value occurs at the vertex. Find the critical point by setting the derivative to zero: $f'(x) = -2x + 4$. Setting $f'(x) = 0$ gives $-2x + 4 = 0$, so $x = 2$. This is the location of the maximum. To find the maximum value, plug $x=2$ back into the original function: $f(2) = -(2)^2 + 4(2) + 1 = -4 + 8 + 1 = 5$."
                },
                {
                  question: "An object's position is given by $s(t) = t^3 - 3t^2 + 2$ for $t \\ge 0$. When is the object at rest?",
                  options: [
                    { text: "t = 0 and t = 2", isCorrect: true },
                    { text: "t = 1", isCorrect: false },
                    { text: "t = 3", isCorrect: false },
                    { text: "t = 0 and t = 3", isCorrect: false }
                  ],
                  explanation: "An object is at rest when its velocity is zero. Velocity is the derivative of the position function: $v(t) = s'(t) = 3t^2 - 6t$. Set the velocity to zero and solve for $t$: $3t^2 - 6t = 0 \\implies 3t(t - 2) = 0$. The solutions are $t=0$ and $t=2$."
                }
              ]
            } }, 
            { name: 'Partial Derivatives', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition of Partial Derivatives</h3>
<p class="mb-4">For a function of two or more variables, such as $f(x, y)$, a partial derivative is the derivative with respect to one of those variables, with the other variables held constant.</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>The partial derivative of $f$ with respect to $x$ is denoted as $\\frac{\\partial f}{\\partial x}$ or $f_x$. To compute it, treat $y$ as a constant and differentiate $f(x, y)$ with respect to $x$.</li>
    <li>The partial derivative of $f$ with respect to $y$ is denoted as $\\frac{\\partial f}{\\partial y}$ or $f_y$. To compute it, treat $x$ as a constant and differentiate $f(x, y)$ with respect to $y$.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">2. Higher-Order Partial Derivatives</h3>
<p class="mb-4">We can take partial derivatives of partial derivatives. For a function $f(x, y)$, there are four second-order partial derivatives:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>$\\frac{\\partial^2 f}{\\partial x^2} = \\frac{\\partial}{\\partial x} \\left(\\frac{\\partial f}{\\partial x}\\right) = f_{xx}$</li>
    <li>$\\frac{\\partial^2 f}{\\partial y^2} = \\frac{\\partial}{\\partial y} \\left(\\frac{\\partial f}{\\partial y}\\right) = f_{yy}$</li>
    <li>$\\frac{\\partial^2 f}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y} \\left(\\frac{\\partial f}{\\partial x}\\right) = f_{xy}$</li>
    <li>$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial}{\\partial x} \\left(\\frac{\\partial f}{\\partial y}\\right) = f_{yx}$</li>
</ul>
<p class="mb-4"><strong>Clairaut's Theorem:</strong> For most functions encountered in engineering, the mixed partial derivatives are equal: $f_{xy} = f_{yx}$.</p>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Find the partial derivative $\\frac{\\partial f}{\\partial x}$ for the function $f(x, y) = 3x^2y + y^3$.",
                  options: [
                    { text: "$6xy$", isCorrect: true },
                    { text: "$3x^2 + 3y^2$", isCorrect: false },
                    { text: "$6xy + 3y^2$", isCorrect: false },
                    { text: "$6x$", isCorrect: false }
                  ],
                  explanation: "To find $\\frac{\\partial f}{\\partial x}$, we treat $y$ as a constant. The derivative of $3x^2y$ with respect to $x$ is $3y(2x) = 6xy$. The derivative of $y^3$ with respect to $x$ is 0, since it's treated as a constant. So, $\\frac{\\partial f}{\\partial x} = 6xy$."
                },
                {
                  question: "Find the partial derivative $\\frac{\\partial f}{\\partial y}$ for the function $f(x, y) = 3x^2y + y^3$.",
                  options: [
                    { text: "$6xy$", isCorrect: false },
                    { text: "$3x^2 + 3y^2$", isCorrect: true },
                    { text: "$3x^2$", isCorrect: false },
                    { text: "$3y^2$", isCorrect: false }
                  ],
                  explanation: "To find $\\frac{\\partial f}{\\partial y}$, we treat $x$ as a constant. The derivative of $3x^2y$ with respect to $y$ is $3x^2(1) = 3x^2$. The derivative of $y^3$ with respect to $y$ is $3y^2$. So, $\\frac{\\partial f}{\\partial y} = 3x^2 + 3y^2$."
                },
                {
                  question: "For $f(x, y) = e^{xy}$, find $f_x(1, 2)$.",
                  options: [
                    { text: "$e^2$", isCorrect: false },
                    { text: "$2e^2$", isCorrect: true },
                    { text: "$e$", isCorrect: false },
                    { text: "$2e$", isCorrect: false }
                  ],
                  explanation: "First, find the partial derivative $f_x = \\frac{\\partial}{\\partial x}(e^{xy})$. Using the chain rule and treating $y$ as a constant, we get $f_x = e^{xy} \\cdot \\frac{\\partial}{\\partial x}(xy) = e^{xy} \\cdot y = ye^{xy}$. Now, evaluate this at the point $(1, 2)$: $f_x(1, 2) = 2e^{(1)(2)} = 2e^2$."
                },
                {
                  question: "Find the second partial derivative $f_{xx}$ for the function $f(x, y) = x^3 + 2x^2y^2 - 5y^4$.",
                  options: [
                    { text: "$6x + 4y^2$", isCorrect: true },
                    { text: "$6x$", isCorrect: false },
                    { text: "$4y^2$", isCorrect: false },
                    { text: "$3x^2 + 4xy^2$", isCorrect: false }
                  ],
                  explanation: "First, find the first partial derivative with respect to $x$: $f_x = \\frac{\\partial f}{\\partial x} = 3x^2 + 4xy^2$. Now, differentiate $f_x$ with respect to $x$ again: $f_{xx} = \\frac{\\partial}{\\partial x}(3x^2 + 4xy^2) = 6x + 4y^2$."
                },
                {
                  question: "Find the mixed partial derivative $f_{xy}$ for the function $f(x, y) = \\sin(x) \\cos(y)$.",
                  options: [
                    { text: "$-\\sin(x) \\sin(y)$", isCorrect: true },
                    { text: "$\\cos(x) \\cos(y)$", isCorrect: false },
                    { text: "$-\\cos(x) \\sin(y)$", isCorrect: false },
                    { text: "$\\cos(x) \\sin(y)$", isCorrect: false }
                  ],
                  explanation: "First, find $f_x$: $f_x = \\frac{\\partial}{\\partial x}(\\sin(x) \\cos(y)) = \\cos(x) \\cos(y)$. Now, differentiate $f_x$ with respect to $y$: $f_{xy} = \\frac{\\partial}{\\partial y}(\\cos(x) \\cos(y)) = \\cos(x) (-\\sin(y)) = -\\sin(x) \\sin(y)$."
                }
              ]
            } }, 
            { name: 'Indefinite Integrals', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition of Antiderivative</h3>
<p class="mb-4">An antiderivative of a function $f(x)$ is a function $F(x)$ whose derivative is $f(x)$, i.e., $F'(x) = f(x)$. The indefinite integral of $f(x)$, denoted by $\\int f(x) dx$, represents the family of all its antiderivatives.</p>
<p class="mb-4">If $F(x)$ is one antiderivative of $f(x)$, then the indefinite integral is written as:</p>
$$\\int f(x) dx = F(x) + C$$
<p class="mb-4">where $C$ is an arbitrary constant of integration.</p>
<h3 class="text-lg font-semibold mb-2">2. Basic Integration Rules</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Power Rule:</strong> $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$, for $n \\neq -1$</li>
    <li><strong>Constant Multiple Rule:</strong> $\\int kf(x) dx = k \\int f(x) dx$</li>
    <li><strong>Sum/Difference Rule:</strong> $\\int (f(x) \\pm g(x)) dx = \\int f(x) dx \\pm \\int g(x) dx$</li>
    <li><strong>Integral of 1/x:</strong> $\\int \\frac{1}{x} dx = \\ln|x| + C$</li>
    <li><strong>Exponential Rule:</strong> $\\int e^x dx = e^x + C$</li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. Integration Techniques</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Integration by Substitution (u-Substitution):</strong> Used to reverse the chain rule. Choose a substitution $u = g(x)$, find $du = g'(x)dx$, substitute to express the integral in terms of $u$, integrate, and then substitute back for $x$.</li>
    <li><strong>Integration by Parts:</strong> Used to reverse the product rule. The formula is: $$\\int u dv = uv - \\int v du$$ A common mnemonic for choosing $u$ is LIATE (Logarithmic, Inverse Trig, Algebraic, Trigonometric, Exponential).</li>
</ul>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Evaluate the indefinite integral: $\\int (4x^3 + 3x^2 - 5) dx$",
                  options: [
                    { text: "$x^4 + x^3 - 5x + C$", isCorrect: true },
                    { text: "$12x^2 + 6x + C$", isCorrect: false },
                    { text: "$4x^4 + 3x^3 - 5x + C$", isCorrect: false },
                    { text: "$x^4 + x^3 - 5 + C$", isCorrect: false }
                  ],
                  explanation: "Integrate each term using the power rule: $\\int 4x^3 dx = 4\\frac{x^4}{4} = x^4$. $\\int 3x^2 dx = 3\\frac{x^3}{3} = x^3$. $\\int -5 dx = -5x$. Combining these and adding the constant of integration gives $x^4 + x^3 - 5x + C$."
                },
                {
                  question: "Find the indefinite integral: $\\int \\cos(3x) dx$",
                  options: [
                    { text: "$-\\frac{1}{3}\\sin(3x) + C$", isCorrect: false },
                    { text: "$\\frac{1}{3}\\sin(3x) + C$", isCorrect: true },
                    { text: "$-3\\sin(3x) + C$", isCorrect: false },
                    { text: "$3\\sin(3x) + C$", isCorrect: false }
                  ],
                  explanation: "Use u-substitution. Let $u = 3x$. Then $du = 3dx$, which means $dx = \\frac{du}{3}$. Substitute into the integral: $\\int \\cos(u) \\frac{du}{3} = \\frac{1}{3} \\int \\cos(u) du = \\frac{1}{3} \\sin(u) + C$. Now substitute back for $x$: $\\frac{1}{3}\\sin(3x) + C$."
                },
                {
                  question: "Evaluate $\\int 2x(x^2 + 1)^4 dx$.",
                  options: [
                    { text: "$\\frac{(x^2+1)^5}{5} + C$", isCorrect: true },
                    { text: "$\\frac{(x^2+1)^5}{10} + C$", isCorrect: false },
                    { text: "$5(x^2+1)^5 + C$", isCorrect: false },
                    { text: "$2x \\frac{(x^2+1)^5}{5} + C$", isCorrect: false }
                  ],
                  explanation: "Use u-substitution. Let $u = x^2 + 1$. Then $du = 2x dx$. Notice that $2x dx$ is exactly what we have in the integral. Substitute: $\\int u^4 du = \\frac{u^5}{5} + C$. Substitute back for $x$: $\\frac{(x^2+1)^5}{5} + C$."
                },
                {
                  question: "Find the integral: $\\int x e^x dx$",
                  options: [
                    { text: "$e^x + C$", isCorrect: false },
                    { text: "$xe^x - e^x + C$", isCorrect: true },
                    { text: "$\\frac{x^2}{2}e^x + C$", isCorrect: false },
                    { text: "$xe^x + e^x + C$", isCorrect: false }
                  ],
                  explanation: "Use integration by parts: $\\int u dv = uv - \\int v du$. Let $u = x$ and $dv = e^x dx$. Then $du = dx$ and $v = \\int e^x dx = e^x$. Applying the formula: $\\int x e^x dx = x e^x - \\int e^x dx = xe^x - e^x + C$."
                },
                {
                  question: "Evaluate $\\int \\frac{5}{x} dx$.",
                  options: [
                    { text: "$5 \\ln|x| + C$", isCorrect: true },
                    { text: "$-\\frac{5}{x^2} + C$", isCorrect: false },
                    { text: "$5x^{-1} + C$", isCorrect: false },
                    { text: "$\\ln|5x| + C$", isCorrect: false }
                  ],
                  explanation: "Use the constant multiple rule and the rule for integrating $1/x$: $\\int \\frac{5}{x} dx = 5 \\int \\frac{1}{x} dx = 5 \\ln|x| + C$."
                }
              ]
            } },
          ] 
        },
        { 
          name: 'Differential Equations', 
          subtopics: [
            { name: 'General Terminology', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition</h3>
<p class="mb-4">A <strong>differential equation (DE)</strong> is an equation that contains an unknown function and one or more of its derivatives.</p>
<h3 class="text-lg font-semibold mb-2">2. Classification of DEs</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Order:</strong> The order of a DE is the order of the highest derivative that appears in the equation. For example, $y'' + 3y' - 2y = x$ is a second-order DE.</li>
    <li><strong>Linearity:</strong> A DE is <strong>linear</strong> if the dependent variable (e.g., $y$) and its derivatives appear only to the first power and are not multiplied together. Otherwise, it is <strong>nonlinear</strong>. The equation $y' + 2y = x^2$ is linear, while $(y')^2 + y = 0$ is nonlinear.</li>
    <li><strong>Homogeneity:</strong> A linear DE is <strong>homogeneous</strong> if every term contains the dependent variable or one of its derivatives. If there is a term that is a function of only the independent variable (or a constant), the equation is <strong>nonhomogeneous</strong>. For example, $y'' - 4y = 0$ is homogeneous, while $y'' - 4y = \\sin(x)$ is nonhomogeneous.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. Solutions to DEs</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>A <strong>solution</strong> to a DE is a function that satisfies the equation.</li>
    <li>A <strong>general solution</strong> contains arbitrary constants (e.g., $C_1, C_2$) and represents the entire family of solutions.</li>
    <li>A <strong>particular solution</strong> is a solution where the constants have been determined by using initial or boundary conditions.</li>
    <li>An <strong>initial value problem (IVP)</strong> is a DE combined with initial conditions that specify the value of the solution and its derivatives at a particular point.</li>
</ul>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "What is the order of the differential equation $\\frac{d^3y}{dx^3} + 4\\left(\\frac{dy}{dx}\\right)^2 - 5y = e^x$?",
                  options: [
                    { text: "1", isCorrect: false },
                    { text: "2", isCorrect: false },
                    { text: "3", isCorrect: true },
                    { text: "4", isCorrect: false }
                  ],
                  explanation: "The order of a differential equation is the order of the highest derivative present. In this equation, the highest derivative is $\\frac{d^3y}{dx^3}$, which is a third derivative. Therefore, the order is 3."
                },
                {
                  question: "Which of the following differential equations is linear?",
                  options: [
                    { text: "$y'' + \\sin(y) = 0$", isCorrect: false },
                    { text: "$y' + xy^2 = 1$", isCorrect: false },
                    { text: "$y''' + 2y' + 3y = x^2$", isCorrect: true },
                    { text: "$yy' = x$", isCorrect: false }
                  ],
                  explanation: "A linear DE has the dependent variable ($y$) and its derivatives ($y', y'', ...$) appearing only to the first power. In option C, $y'''$, $y'$, and $y$ are all to the first power. Options A, B, and D are nonlinear because of the terms $\\sin(y)$, $y^2$, and $yy'$, respectively."
                },
                {
                  question: "Is the differential equation $t^2\\frac{d^2x}{dt^2} + t\\frac{dx}{dt} + 2x = \\sin(t)$ homogeneous or nonhomogeneous?",
                  options: [
                    { text: "Homogeneous", isCorrect: false },
                    { text: "Nonhomogeneous", isCorrect: true },
                    { text: "Both", isCorrect: false },
                    { text: "Neither", isCorrect: false }
                  ],
                  explanation: "The equation is nonhomogeneous because there is a term, $\\sin(t)$, that is a function of the independent variable ($t$) only. For the equation to be homogeneous, all terms must involve the dependent variable ($x$) or its derivatives."
                },
                {
                  question: "Verify that $y = Ce^{2x}$ is a solution to the differential equation $y' - 2y = 0$.",
                  options: [
                    { text: "It is a solution.", isCorrect: true },
                    { text: "It is not a solution.", isCorrect: false },
                    { text: "It is a solution only if C=0.", isCorrect: false },
                    { text: "It is a solution only if C=1.", isCorrect: false }
                  ],
                  explanation: "Given $y = Ce^{2x}$, find its derivative: $y' = C \\cdot e^{2x} \\cdot 2 = 2Ce^{2x}$. Now substitute $y$ and $y'$ into the DE: $(2Ce^{2x}) - 2(Ce^{2x}) = 0$. This simplifies to $0 = 0$, which is a true statement. Therefore, $y = Ce^{2x}$ is a solution for any constant C."
                },
                {
                  question: "The equation $y' = ky$ is a first-order, linear, homogeneous differential equation. True or false?",
                  options: [
                    { text: "True", isCorrect: true },
                    { text: "False", isCorrect: false }
                  ],
                  explanation: "The highest derivative is $y'$, so it is first-order. The terms $y'$ and $y$ are both to the first power, so it is linear. Every term involves $y$ or its derivative, so it is homogeneous. Therefore, the statement is true."
                }
              ]
            } }, 
            { name: 'First Order DE', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Separable Equations</h3>
<p class="mb-4">A first-order DE is separable if it can be written in the form:</p>
$$M(x)dx + N(y)dy = 0$$
<p class="mb-4">To solve, separate the variables so that all $x$ terms are on one side and all $y$ terms are on the other, then integrate both sides: $\\int M(x)dx = -\\int N(y)dy$.</p>
<h3 class="text-lg font-semibold mb-2">2. Linear Equations</h3>
<p class="mb-4">A first-order linear DE has the standard form:</p>
$$\\frac{dy}{dx} + P(x)y = Q(x)$$
<p class="mb-4">To solve, first calculate the integrating factor, $I(x)$: </p>
$$I(x) = e^{\\int P(x)dx}$$
<p class="mb-4">Then multiply the entire standard form equation by $I(x)$. The left side will become the derivative of the product $I(x)y$. The solution is then found by integrating both sides:</p>
$$I(x)y = \\int I(x)Q(x)dx$$
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Find the general solution to the separable differential equation $\\frac{dy}{dx} = \\frac{x^2}{y}$.",
                  options: [
                    { text: "$y^2 = \\frac{2}{3}x^3 + C$", isCorrect: true },
                    { text: "$y = x^3 + C$", isCorrect: false },
                    { text: "$2y = 3x^3 + C$", isCorrect: false },
                    { text: "$y^2 = x^2 + C$", isCorrect: false }
                  ],
                  explanation: "This is a separable equation. Separate the variables: $y dy = x^2 dx$. Integrate both sides: $\\int y dy = \\int x^2 dx$. This gives $\\frac{y^2}{2} = \\frac{x^3}{3} + C_1$. Multiplying by 2 gives $y^2 = \\frac{2}{3}x^3 + 2C_1$. Since $2C_1$ is just an arbitrary constant, we can call it $C$. The solution is $y^2 = \\frac{2}{3}x^3 + C$."
                },
                {
                  question: "Solve the initial value problem $y' = 2y$ with $y(0) = 3$.",
                  options: [
                    { text: "$y = 3e^{2x}$", isCorrect: true },
                    { text: "$y = e^{2x} + 2$", isCorrect: false },
                    { text: "$y = 2e^{3x}$", isCorrect: false },
                    { text: "$y = 3e^x$", isCorrect: false }
                  ],
                  explanation: "Separate the variables: $\\frac{dy}{y} = 2dx$. Integrate both sides: $\\int \\frac{dy}{y} = \\int 2dx$, which gives $\\ln|y| = 2x + C_1$. Exponentiate both sides: $y = e^{2x+C_1} = e^{C_1}e^{2x}$. Let $C = e^{C_1}$, so the general solution is $y = Ce^{2x}$. Now use the initial condition $y(0)=3$: $3 = Ce^{2(0)} = C(1)$, so $C=3$. The particular solution is $y = 3e^{2x}$."
                },
                {
                  question: "What is the integrating factor for the linear differential equation $y' + 2xy = x$?",
                  options: [
                    { text: "$e^{x^2}$", isCorrect: true },
                    { text: "$x^2$", isCorrect: false },
                    { text: "$e^{2x}$", isCorrect: false },
                    { text: "$2x$", isCorrect: false }
                  ],
                  explanation: "The equation is in the standard form $y' + P(x)y = Q(x)$ with $P(x) = 2x$. The integrating factor is $I(x) = e^{\\int P(x)dx} = e^{\\int 2x dx} = e^{x^2}$."
                },
                {
                  question: "Solve the linear differential equation $y' + 3y = 6$.",
                  options: [
                    { text: "$y = 2 + Ce^{-3x}$", isCorrect: true },
                    { text: "$y = 2 + Ce^{3x}$", isCorrect: false },
                    { text: "$y = 6 + Ce^{-3x}$", isCorrect: false },
                    { text: "$y = Ce^{-3x} - 2$", isCorrect: false }
                  ],
                  explanation: "This is a linear DE with $P(x)=3$ and $Q(x)=6$. The integrating factor is $I(x) = e^{\\int 3 dx} = e^{3x}$. Multiply the DE by $I(x)$: $e^{3x}y' + 3e^{3x}y = 6e^{3x}$. The left side is $\\frac{d}{dx}(ye^{3x})$. So, $\\frac{d}{dx}(ye^{3x}) = 6e^{3x}$. Integrate both sides: $ye^{3x} = \\int 6e^{3x} dx = 6(\\frac{1}{3}e^{3x}) + C = 2e^{3x} + C$. Finally, solve for $y$: $y = 2 + Ce^{-3x}$."
                },
                {
                  question: "Identify the type of the differential equation $xy' = y + x$.",
                  options: [
                    { text: "Linear but not separable", isCorrect: true },
                    { text: "Separable but not linear", isCorrect: false },
                    { text: "Both separable and linear", isCorrect: false },
                    { text: "Neither separable nor linear", isCorrect: false }
                  ],
                  explanation: "First, put it in standard form by dividing by x: $y' = \\frac{y}{x} + 1$, which can be rewritten as $y' - \\frac{1}{x}y = 1$. This matches the linear form $y' + P(x)y = Q(x)$ with $P(x) = -1/x$ and $Q(x) = 1$. So it is linear. It is not separable because you cannot isolate all y-terms on one side and all x-terms on the other."
                }
              ]
            } }, 
            { name: 'Higher Order DE', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Homogeneous Linear DEs with Constant Coefficients</h3>
<p class="mb-4">This type of DE has the form: </p>
$$ay'' + by' + cy = 0$$
<p class="mb-4">To solve it, we assume a solution of the form $y = e^{rx}$ and substitute it into the equation. This leads to the <strong>characteristic (or auxiliary) equation</strong>:</p>
$$ar^2 + br + c = 0$$
<p class="mb-4">The general solution depends on the roots of this quadratic equation:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Case 1: Two distinct real roots, $r_1$ and $r_2$.</strong> The general solution is $y = C_1e^{r_1x} + C_2e^{r_2x}$.</li>
    <li><strong>Case 2: One repeated real root, $r$.</strong> The general solution is $y = C_1e^{rx} + C_2xe^{rx}$.</li>
    <li><strong>Case 3: Two complex conjugate roots, $r = \\alpha \\pm i\\beta$.</strong> The general solution is $y = e^{\\alpha x}(C_1\\cos(\\beta x) + C_2\\sin(\\beta x))$.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">2. Nonhomogeneous Linear DEs</h3>
<p class="mb-4">For an equation like $ay'' + by' + cy = G(x)$, the general solution is the sum of the complementary solution ($y_c$) and a particular solution ($y_p$):</p>
$$y(x) = y_c(x) + y_p(x)$$
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>$y_c$ is the general solution to the corresponding homogeneous equation ($ay'' + by' + cy = 0$).</li>
    <li>$y_p$ is any particular solution to the nonhomogeneous equation. It is often found using the <strong>Method of Undetermined Coefficients</strong>, where you make an educated guess for the form of $y_p$ based on the form of $G(x)$.</li>
</ul>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Find the general solution of the differential equation $y'' - y' - 6y = 0$.",
                  options: [
                    { text: "$y = C_1e^{3x} + C_2e^{-2x}$", isCorrect: true },
                    { text: "$y = C_1e^{-3x} + C_2e^{2x}$", isCorrect: false },
                    { text: "$y = C_1e^{6x} + C_2e^{-x}$", isCorrect: false },
                    { text: "$y = (C_1 + C_2x)e^{3x}$", isCorrect: false }
                  ],
                  explanation: "The characteristic equation is $r^2 - r - 6 = 0$. Factoring gives $(r-3)(r+2) = 0$. The roots are $r_1 = 3$ and $r_2 = -2$. Since we have two distinct real roots, the general solution is of the form $y = C_1e^{r_1x} + C_2e^{r_2x}$, which is $y = C_1e^{3x} + C_2e^{-2x}$."
                },
                {
                  question: "What is the general solution to $y'' + 4y' + 4y = 0$?",
                  options: [
                    { text: "$y = C_1e^{2x} + C_2e^{-2x}$", isCorrect: false },
                    { text: "$y = (C_1 + C_2x)e^{-2x}$", isCorrect: true },
                    { text: "$y = e^{-2x}(C_1\\cos(2x) + C_2\\sin(2x))$", isCorrect: false },
                    { text: "$y = C_1e^{-2x} + C_2xe^{-2x}$", isCorrect: true }
                  ],
                  explanation: "The characteristic equation is $r^2 + 4r + 4 = 0$. This factors as $(r+2)^2 = 0$. We have one repeated real root, $r = -2$. For a repeated root, the general solution is of the form $y = C_1e^{rx} + C_2xe^{rx}$. So, $y = C_1e^{-2x} + C_2xe^{-2x}$, which can also be written as $y = (C_1 + C_2x)e^{-2x}$."
                },
                {
                  question: "Solve the differential equation $y'' + 9y = 0$.",
                  options: [
                    { text: "$y = C_1e^{3x} + C_2e^{-3x}$", isCorrect: false },
                    { text: "$y = e^{x}(C_1\\cos(3x) + C_2\\sin(3x))$", isCorrect: false },
                    { text: "$y = C_1\\cos(3x) + C_2\\sin(3x)$", isCorrect: true },
                    { text: "$y = (C_1 + C_2x)e^{3x}$", isCorrect: false }
                  ],
                  explanation: "The characteristic equation is $r^2 + 9 = 0$. This gives $r^2 = -9$, so the roots are $r = \\pm \\sqrt{-9} = \\pm 3i$. These are complex conjugate roots of the form $\\alpha \\pm i\\beta$ with $\\alpha=0$ and $\\beta=3$. The general solution is $y = e^{\\alpha x}(C_1\\cos(\\beta x) + C_2\\sin(\\beta x)) = e^{0x}(C_1\\cos(3x) + C_2\\sin(3x)) = C_1\\cos(3x) + C_2\\sin(3x)$."
                },
                {
                  question: "The complementary solution to $y'' - 4y = 8x^2$ is $y_c = C_1e^{2x} + C_2e^{-2x}$. What is the appropriate form of the particular solution, $y_p$, to try?",
                  options: [
                    { text: "$y_p = Ax^2$", isCorrect: false },
                    { text: "$y_p = Ae^{2x}$", isCorrect: false },
                    { text: "$y_p = Ax^2 + Bx + C$", isCorrect: true },
                    { text: "$y_p = A\\cos(2x) + B\\sin(2x)$", isCorrect: false }
                  ],
                  explanation: "The nonhomogeneous term is $G(x) = 8x^2$, which is a second-degree polynomial. For the Method of Undetermined Coefficients, the guess for the particular solution should be a general polynomial of the same degree. Therefore, the appropriate form to try is $y_p = Ax^2 + Bx + C$."
                },
                {
                  question: "Find a particular solution for the DE $y'' + y = 3e^{2x}$.",
                  options: [
                    { text: "$y_p = 3e^{2x}$", isCorrect: false },
                    { text: "$y_p = \\frac{3}{5}e^{2x}$", isCorrect: true },
                    { text: "$y_p = e^{2x}$", isCorrect: false },
                    { text: "$y_p = \frac{3}{4}e^{2x}$", isCorrect: false }
                  ],
                  explanation: "The complementary solution for $y''+y=0$ is $y_c = C_1\\cos(x) + C_2\\sin(x)$. For the particular solution, we guess a form similar to the nonhomogeneous term: $y_p = Ae^{2x}$. We need to find its derivatives: $y_p' = 2Ae^{2x}$ and $y_p'' = 4Ae^{2x}$. Substitute these into the DE: $(4Ae^{2x}) + (Ae^{2x}) = 3e^{2x}$. This simplifies to $5Ae^{2x} = 3e^{2x}$. Thus, $5A=3$, so $A = \\frac{3}{5}$. The particular solution is $y_p = \\frac{3}{5}e^{2x}$."
                }
              ]
            } }, 
            { name: 'Laplace Transform', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition</h3>
<p class="mb-4">The Laplace transform is an integral transform that converts a function of a real variable $t$ (often time) to a function of a complex variable $s$ (frequency). It is a powerful tool for solving linear differential equations.</p>
<p class="mb-4">The Laplace transform of a function $f(t)$, denoted as $\\mathcal{L}\\{f(t)\\}$ or $F(s)$, is defined as:</p>
$$F(s) = \\mathcal{L}\\{f(t)\\} = \\int_0^\\infty e^{-st}f(t)dt$$
<h3 class="text-lg font-semibold mb-2">2. Transforms of Derivatives</h3>
<p class="mb-4">The key property that makes the Laplace transform useful for solving DEs is its effect on derivatives:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>$\\mathcal{L}\\{f'(t)\\} = sF(s) - f(0)$</li>
    <li>$\\mathcal{L}\\{f''(t)\\} = s^2F(s) - sf(0) - f'(0)$</li>
</ul>
<p class="mb-4">This property transforms differentiation in the time domain into multiplication by $s$ in the frequency domain, effectively converting a differential equation into an algebraic equation.</p>
<h3 class="text-lg font-semibold mb-2">3. Common Laplace Transforms</h3>
<p class="mb-4">You will typically use a table of Laplace transforms rather than computing them from the definition. Here are a few common ones:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>$\\mathcal{L}\\{1\\} = \\frac{1}{s}$</li>
    <li>$\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$</li>
    <li>$\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$</li>
    <li>$\\mathcal{L}\\{\\sin(bt)\\} = \\frac{b}{s^2+b^2}$</li>
    <li>$\\mathcal{L}\\{\\cos(bt)\\} = \\frac{s}{s^2+b^2}$</li>
</ul>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Find the Laplace transform of $f(t) = 5$.",
                  options: [
                    { text: "$\\frac{5}{s}$", isCorrect: true },
                    { text: "5", isCorrect: false },
                    { text: "$\\frac{1}{s-5}$", isCorrect: false },
                    { text: "$5s$", isCorrect: false }
                  ],
                  explanation: "Using the linearity property and the transform of a constant: $\\mathcal{L}\\{5\\} = 5 \\cdot \\mathcal{L}\\{1\\} = 5 \\cdot \\frac{1}{s} = \\frac{5}{s}$."
                },
                {
                  question: "What is the Laplace transform of $f(t) = e^{-3t}$?",
                  options: [
                    { text: "$\\frac{1}{s-3}$", isCorrect: false },
                    { text: "$\\frac{1}{s+3}$", isCorrect: true },
                    { text: "$\\frac{s}{s^2+9}$", isCorrect: false },
                    { text: "$\\frac{3}{s^2+9}$", isCorrect: false }
                  ],
                  explanation: "Using the standard transform formula $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$, with $a = -3$. So, $\\mathcal{L}\\{e^{-3t}\\} = \\frac{1}{s-(-3)} = \\frac{1}{s+3}$."
                },
                {
                  question: "Find the Laplace transform of $f(t) = \\cos(4t)$.",
                  options: [
                    { text: "$\\frac{4}{s^2+16}$", isCorrect: false },
                    { text: "$\\frac{s}{s^2-16}$", isCorrect: false },
                    { text: "$\\frac{s}{s^2+16}$", isCorrect: true },
                    { text: "$\\frac{4}{s^2-16}$", isCorrect: false }
                  ],
                  explanation: "Using the standard transform formula $\\mathcal{L}\\{\\cos(bt)\\} = \\frac{s}{s^2+b^2}$, with $b=4$. So, $\\mathcal{L}\\{\\cos(4t)\\} = \\frac{s}{s^2+4^2} = \\frac{s}{s^2+16}$."
                },
                {
                  question: "Given a function $y(t)$ with Laplace transform $Y(s)$, what is the transform of its derivative, $y'(t)$, if $y(0) = 2$?",
                  options: [
                    { text: "$sY(s)$", isCorrect: false },
                    { text: "$sY(s) - 2$", isCorrect: true },
                    { text: "$s^2Y(s) - 2$", isCorrect: false },
                    { text: "$Y(s) - 2$", isCorrect: false }
                  ],
                  explanation: "The formula for the Laplace transform of a first derivative is $\\mathcal{L}\\{y'(t)\\} = sY(s) - y(0)$. Given that $y(0) = 2$, the transform is $sY(s) - 2$."
                },
                {
                  question: "Find the Laplace transform of $f(t) = t^3$.",
                  options: [
                    { text: "$\\frac{3}{s^4}$", isCorrect: false },
                    { text: "$\\frac{6}{s^3}$", isCorrect: false },
                    { text: "$\\frac{6}{s^4}$", isCorrect: true },
                    { text: "$\\frac{3}{s^3}$", isCorrect: false }
                  ],
                  explanation: "Using the formula $\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$ with $n=3$. So, $\\mathcal{L}\\{t^3\\} = \\frac{3!}{s^{3+1}} = \\frac{3 \\cdot 2 \\cdot 1}{s^4} = \\frac{6}{s^4}$."
                }
              ]
            } },
          ] 
        },
        { 
          name: 'Linear Algebra', 
          subtopics: [
            { name: 'Determinant of a Matrix', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition</h3>
<p class="mb-4">The determinant is a scalar value that can be computed from the elements of a square matrix. It is denoted as $\\det(A)$ or $|A|$. The determinant provides important information about the matrix, such as whether it is invertible.</p>
<h3 class="text-lg font-semibold mb-2">2. Determinant of a 2x2 Matrix</h3>
<p class="mb-4">For a 2x2 matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the determinant is:</p>
$$|A| = ad - bc$$
<h3 class="text-lg font-semibold mb-2">3. Determinant of a 3x3 Matrix</h3>
<p class="mb-4">For a 3x3 matrix $A = \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}$, the determinant can be calculated using the method of cofactor expansion. Expanding along the first row gives:</p>
$$|A| = a \\begin{vmatrix} e & f \\\\ h & i \\end{vmatrix} - b \\begin{vmatrix} d & f \\\\ g & i \\end{vmatrix} + c \\begin{vmatrix} d & e \\\\ g & h \\end{vmatrix}$$
$$|A| = a(ei - fh) - b(di - fg) + c(dh - eg)$$
<h3 class="text-lg font-semibold mb-2">4. Properties of Determinants</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>A matrix has an inverse if and only if its determinant is non-zero ($|A| \\neq 0$).</li>
    <li>The determinant of the identity matrix is 1, $|I|=1$.</li>
    <li>If a row or column consists entirely of zeros, the determinant is 0.</li>
    <li>If two rows or columns are identical, the determinant is 0.</li>
    <li>The determinant of a matrix product is the product of their determinants: $|AB| = |A||B|$.</li>
    <li>The determinant of a transpose is the same as the original: $|A^T| = |A|$.</li>
</ul>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Calculate the determinant of the matrix $A = \\begin{pmatrix} 3 & 1 \\\\ 4 & 2 \\end{pmatrix}$.",
                  options: [
                    { text: "2", isCorrect: true },
                    { text: "10", isCorrect: false },
                    { text: "-2", isCorrect: false },
                    { text: "5", isCorrect: false }
                  ],
                  explanation: "For a 2x2 matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the determinant is $ad - bc$. So, for this matrix, the determinant is $(3)(2) - (1)(4) = 6 - 4 = 2$."
                },
                {
                  question: "Find the determinant of $B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{pmatrix}$.",
                  options: [
                    { text: "12", isCorrect: false },
                    { text: "24", isCorrect: true },
                    { text: "0", isCorrect: false },
                    { text: "32", isCorrect: false }
                  ],
                  explanation: "For a triangular matrix (either upper or lower), the determinant is the product of the diagonal entries. So, $|B| = 1 \\cdot 4 \\cdot 6 = 24$."
                },
                {
                  question: "For what value of $k$ is the matrix $C = \\begin{pmatrix} 2 & 4 \\\\ 3 & k \\end{pmatrix}$ singular (i.e., not invertible)?",
                  options: [
                    { text: "3", isCorrect: false },
                    { text: "4", isCorrect: false },
                    { text: "6", isCorrect: true },
                    { text: "12", isCorrect: false }
                  ],
                  explanation: "A matrix is singular if its determinant is zero. The determinant of C is $(2)(k) - (4)(3) = 2k - 12$. Set this equal to zero: $2k - 12 = 0 \\implies 2k = 12 \\implies k = 6$."
                },
                {
                  question: "Calculate the determinant of the matrix $D = \\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & 1 & 0 \\\\ -1 & 0 & 2 \\end{pmatrix}$.",
                  options: [
                    { text: "5", isCorrect: true },
                    { text: "-1", isCorrect: false },
                    { text: "0", isCorrect: false },
                    { text: "-5", isCorrect: false }
                  ],
                  explanation: "It's easiest to expand along the second column because it has two zeros. $|D| = -0 \\cdot |...| + 1 \\begin{vmatrix} 1 & 3 \\\\ -1 & 2 \\end{vmatrix} - 0 \\cdot |...|$. This simplifies to $1 \cdot ((1)(2) - (3)(-1)) = 1 \cdot (2 + 3) = 5$."
                },
                {
                  question: "If $\\det(A) = 3$ and $\\det(B) = -2$, what is $\\det(AB)$?",
                  options: [
                    { text: "1", isCorrect: false },
                    { text: "-6", isCorrect: true },
                    { text: "6", isCorrect: false },
                    { text: "Cannot be determined", isCorrect: false }
                  ],
                  explanation: "A property of determinants is that $\\det(AB) = \\det(A) \\cdot \\det(B)$. Therefore, $\\det(AB) = (3)(-2) = -6$."
                }
              ]
            } }, 
            { name: 'Matrix Operations', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Matrix Addition and Subtraction</h3>
<p class="mb-4">Matrices can be added or subtracted only if they have the same dimensions (same number of rows and columns). The operation is performed by adding or subtracting the corresponding elements.</p>
<p class="mb-4">If $A = [a_{ij}]$ and $B = [b_{ij}]$, then $A+B = [a_{ij} + b_{ij}]$.</p>
<h3 class="text-lg font-semibold mb-2">2. Scalar Multiplication</h3>
<p class="mb-4">To multiply a matrix by a scalar (a single number), multiply every element of the matrix by that scalar.</p>
<p class="mb-4">If $k$ is a scalar, then $kA = [ka_{ij}]$.</p>
<h3 class="text-lg font-semibold mb-2">3. Matrix Multiplication</h3>
<p class="mb-4">The product of two matrices, $C = AB$, is defined only if the number of columns in matrix A is equal to the number of rows in matrix B. If A is an $m \\times n$ matrix and B is an $n \\times p$ matrix, the resulting matrix C will be an $m \\times p$ matrix.</p>
<p class="mb-4">The element $c_{ij}$ in the resulting matrix is found by taking the dot product of the $i$-th row of A and the $j$-th column of B.</p>
<p class="mb-4">Note that matrix multiplication is <strong>not commutative</strong>, i.e., $AB \\neq BA$ in general.</p>
<h3 class="text-lg font-semibold mb-2">4. Transpose</h3>
<p class="mb-4">The transpose of a matrix A, denoted $A^T$, is obtained by interchanging the rows and columns. If A is an $m \\times n$ matrix, $A^T$ will be an $n \\times m$ matrix.</p>
<h3 class="text-lg font-semibold mb-2">5. Inverse</h3>
<p class="mb-4">The inverse of a square matrix A, denoted $A^{-1}$, is the matrix such that $AA^{-1} = A^{-1}A = I$, where $I$ is the identity matrix. An inverse exists only if the determinant of A is non-zero.</p>
<p class="mb-4">For a 2x2 matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the inverse is: </p>
$$A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Given $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 5 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 4 \\\\ 1 & -2 \\end{pmatrix}$, find $A+B$.",
                  options: [
                    { text: "$\\begin{pmatrix} 1 & 7 \\\\ 3 & 3 \\end{pmatrix}$", isCorrect: true },
                    { text: "$\\begin{pmatrix} 1 & 7 \\\\ 3 & 7 \\end{pmatrix}$", isCorrect: false },
                    { text: "$\\begin{pmatrix} 1 & 12 \\\\ 2 & -10 \\end{pmatrix}$", isCorrect: false },
                    { text: "Undefined", isCorrect: false }
                  ],
                  explanation: "Matrix addition is performed element-wise. $A+B = \\begin{pmatrix} 1+0 & 3+4 \\\\ 2+1 & 5+(-2) \\end{pmatrix} = \\begin{pmatrix} 1 & 7 \\\\ 3 & 3 \\end{pmatrix}$."
                },
                {
                  question: "If $A = \\begin{pmatrix} 2 & -1 \\\\ 4 & 6 \\end{pmatrix}$, what is $3A$?",
                  options: [
                    { text: "$\\begin{pmatrix} 5 & 2 \\\\ 7 & 9 \\end{pmatrix}$", isCorrect: false },
                    { text: "$\\begin{pmatrix} 6 & -3 \\\\ 12 & 18 \\end{pmatrix}$", isCorrect: true },
                    { text: "$\\begin{pmatrix} 6 & -1 \\\\ 12 & 6 \\end{pmatrix}$", isCorrect: false },
                    { text: "$\\begin{pmatrix} 2 & -3 \\\\ 4 & 18 \\end{pmatrix}$", isCorrect: false }
                  ],
                  explanation: "For scalar multiplication, multiply each element by the scalar: $3A = \\begin{pmatrix} 3(2) & 3(-1) \\\\ 3(4) & 3(6) \\end{pmatrix} = \\begin{pmatrix} 6 & -3 \\\\ 12 & 18 \\end{pmatrix}$."
                },
                {
                  question: "Given $A = \\begin{pmatrix} 1 & 2 \\end{pmatrix}$ and $B = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$, find the product $AB$.",
                  options: [
                    { text: "$\\begin{pmatrix} 3 & 8 \\end{pmatrix}$", isCorrect: false },
                    { text: "$\\begin{pmatrix} 3 \\\\ 8 \\end{pmatrix}$", isCorrect: false },
                    { text: "$11$", isCorrect: true },
                    { text: "Undefined", isCorrect: false }
                  ],
                  explanation: "A is a $1 \\times 2$ matrix and B is a $2 \\times 1$ matrix. The number of columns in A (2) equals the number of rows in B (2), so the product is defined and will be a $1 \\times 1$ matrix (a scalar). $AB = [ (1)(3) + (2)(4) ] = [3 + 8] = [11]$, which is treated as the scalar 11."
                },
                {
                  question: "What is the transpose of the matrix $C = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$?",
                  options: [
                    { text: "$\\begin{pmatrix} 4 & 5 & 6 \\\\ 1 & 2 & 3 \\end{pmatrix}$", isCorrect: false },
                    { text: "$\\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$", isCorrect: true },
                    { text: "$\\begin{pmatrix} 3 & 2 & 1 \\\\ 6 & 5 & 4 \\end{pmatrix}$", isCorrect: false },
                    { text: "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$", isCorrect: false }
                  ],
                  explanation: "The transpose is found by interchanging rows and columns. The first row [1 2 3] becomes the first column, and the second row [4 5 6] becomes the second column."
                },
                {
                  question: "Find the inverse of the matrix $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$.",
                  options: [
                    { text: "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$", isCorrect: true },
                    { text: "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$", isCorrect: false },
                    { text: "$\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$", isCorrect: false },
                    { text: "$\\frac{1}{11}\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$", isCorrect: false }
                  ],
                  explanation: "First, find the determinant: $\\det(A) = (3)(2) - (1)(5) = 6 - 5 = 1$. The inverse is $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$."
                }
              ]
            } }, 
            { name: 'Unit Vector', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition of a Vector</h3>
<p class="mb-4">A vector is a mathematical object that has both magnitude (or length) and direction. It can be represented as a directed line segment or in terms of its components, e.g., $\\mathbf{v} = \\langle v_x, v_y, v_z \\rangle$.</p>
<h3 class="text-lg font-semibold mb-2">2. Magnitude of a Vector</h3>
<p class="mb-4">The magnitude (or norm) of a vector $\\mathbf{v} = \\langle v_x, v_y, v_z \\rangle$, denoted by $||\\mathbf{v}||$, is its length. It is calculated using the Pythagorean theorem:</p>
$$||\\mathbf{v}|| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$$
<h3 class="text-lg font-semibold mb-2">3. Unit Vector</h3>
<p class="mb-4">A <strong>unit vector</strong> is a vector with a magnitude of exactly 1. Unit vectors are used to specify a direction.</p>
<p class="mb-4">To find the unit vector $\\mathbf{u}$ in the same direction as a given vector $\\mathbf{v}$, you divide the vector by its own magnitude:</p>
$$\\mathbf{u} = \\frac{\\mathbf{v}}{||\\mathbf{v}||} = \\frac{\\langle v_x, v_y, v_z \\rangle}{\\sqrt{v_x^2 + v_y^2 + v_z^2}}$$
<p class="mb-4">This process is called <strong>normalizing</strong> the vector.</p>
<h3 class="text-lg font-semibold mb-2">4. Standard Unit Vectors</h3>
<p class="mb-4">In three-dimensional space, the standard unit vectors are:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>$\\mathbf{i} = \\langle 1, 0, 0 \\rangle$ (direction of the positive x-axis)</li>
    <li>$\\mathbf{j} = \\langle 0, 1, 0 \\rangle$ (direction of the positive y-axis)</li>
    <li>$\\mathbf{k} = \\langle 0, 0, 1 \\rangle$ (direction of the positive z-axis)</li>
</ul>
<p class="mb-4">Any vector $\\mathbf{v} = \\langle v_x, v_y, v_z \\rangle$ can be written as a linear combination of these standard unit vectors: $\\mathbf{v} = v_x\\mathbf{i} + v_y\\mathbf{j} + v_z\\mathbf{k}$.</p>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "What is the magnitude of the vector $\\mathbf{v} = \\langle 3, 4 \\rangle$?",
                  options: [
                    { text: "5", isCorrect: true },
                    { text: "7", isCorrect: false },
                    { text: "25", isCorrect: false },
                    { text: "1", isCorrect: false }
                  ],
                  explanation: "The magnitude is found using the formula $||\\mathbf{v}|| = \\sqrt{v_x^2 + v_y^2}$. So, $||\\mathbf{v}|| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
                },
                {
                  question: "Find the magnitude of the vector $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}$.",
                  options: [
                    { text: "9", isCorrect: false },
                    { text: "3", isCorrect: true },
                    { text: "5", isCorrect: false },
                    { text: "1", isCorrect: false }
                  ],
                  explanation: "The vector in component form is $\\langle 2, -1, 2 \\rangle$. The magnitude is $||\\mathbf{a}|| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$."
                },
                {
                  question: "Find the unit vector in the direction of $\\mathbf{v} = \\langle 3, 4 \\rangle$.",
                  options: [
                    { text: "$\\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$", isCorrect: true },
                    { text: "$\\langle \\frac{3}{7}, \\frac{4}{7} \\rangle$", isCorrect: false },
                    { text: "$\\langle 3, 4 \\rangle$", isCorrect: false },
                    { text: "$\\langle 1, 1 \\rangle$", isCorrect: false }
                  ],
                  explanation: "First, find the magnitude of $\\mathbf{v}$, which is $||\\mathbf{v}|| = \\sqrt{3^2 + 4^2} = 5$. Then, divide the vector by its magnitude: $\\mathbf{u} = \\frac{\\mathbf{v}}{||\\mathbf{v}||} = \\frac{\\langle 3, 4 \\rangle}{5} = \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$."
                },
                {
                  question: "Normalize the vector $\\mathbf{w} = \\langle 1, -2, 2 \\rangle$.",
                  options: [
                    { text: "$\\langle 1, -1, 1 \\rangle$", isCorrect: false },
                    { text: "$\\langle \\frac{1}{9}, -\\frac{2}{9}, \\frac{2}{9} \\rangle$", isCorrect: false },
                    { text: "$\\langle \\frac{1}{3}, -\\frac{2}{3}, \\frac{2}{3} \\rangle$", isCorrect: true },
                    { text: "$\\langle 1, 0, 0 \\rangle$", isCorrect: false }
                  ],
                  explanation: "Normalizing a vector means finding the unit vector in its direction. First, find the magnitude: $||\\mathbf{w}|| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$. Then, divide the vector by its magnitude: $\\mathbf{u} = \\frac{\\langle 1, -2, 2 \\rangle}{3} = \\langle \\frac{1}{3}, -\\frac{2}{3}, \\frac{2}{3} \\rangle$."
                },
                {
                  question: "Which of the following is a unit vector?",
                  options: [
                    { text: "$\\langle 1, 1, 1 \\rangle$", isCorrect: false },
                    { text: "$\\langle 0, 1, 0 \\rangle$", isCorrect: true },
                    { text: "$\\langle 0.5, 0.5 \\rangle$", isCorrect: false },
                    { text: "$\\langle 1, 0, 1 \\rangle$", isCorrect: false }
                  ],
                  explanation: "A unit vector must have a magnitude of 1. Let's check the magnitudes. A: $\\sqrt{1^2+1^2+1^2} = \\sqrt{3} \\neq 1$. B: $\\sqrt{0^2+1^2+0^2} = \\sqrt{1} = 1$. C: $\\sqrt{0.5^2+0.5^2} = \\sqrt{0.25+0.25} = \\sqrt{0.5} \\neq 1$. D: $\\sqrt{1^2+0^2+1^2} = \\sqrt{2} \\neq 1$. Only option B is a unit vector (it's the standard unit vector $\\mathbf{j}$)."
                }
              ]
            } }, 
            { name: 'Dot and Cross Products', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Dot Product (Scalar Product)</h3>
<p class="mb-4">The dot product of two vectors $\\mathbf{a}$ and $\\mathbf{b}$ results in a scalar. It can be calculated in two ways:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Component Form:</strong> For $\\mathbf{a} = \\langle a_1, a_2, a_3 \\rangle$ and $\\mathbf{b} = \\langle b_1, b_2, b_3 \\rangle$, the dot product is: $$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3$$</li>
    <li><strong>Geometric Form:</strong> $$\\mathbf{a} \\cdot \\mathbf{b} = ||\\mathbf{a}|| \\, ||\\mathbf{b}|| \\cos(\\theta)$$ where $\\theta$ is the angle between the two vectors.</li>
</ul>
<p class="mb-4">The dot product is useful for finding the angle between two vectors and for determining if they are orthogonal (perpendicular). Two vectors are orthogonal if and only if their dot product is zero.</p>
<h3 class="text-lg font-semibold mb-2">2. Cross Product (Vector Product)</h3>
<p class="mb-4">The cross product of two vectors $\\mathbf{a}$ and $\\mathbf{b}$ in 3D space results in a new vector that is perpendicular to both $\\mathbf{a}$ and $\\mathbf{b}$. It is denoted by $\\mathbf{a} \\times \\mathbf{b}$.</p>
<p class="mb-4">For $\\mathbf{a} = a_1\\mathbf{i} + a_2\\mathbf{j} + a_3\\mathbf{k}$ and $\\mathbf{b} = b_1\\mathbf{i} + b_2\\mathbf{j} + b_3\\mathbf{k}$, the cross product can be calculated using a determinant:</p>
$$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix} = (a_2b_3 - a_3b_2)\\mathbf{i} - (a_1b_3 - a_3b_1)\\mathbf{j} + (a_1b_2 - a_2b_1)\\mathbf{k}$$
<p class="mb-4">The magnitude of the cross product is given by $||\\mathbf{a} \\times \\mathbf{b}|| = ||\\mathbf{a}|| \\, ||\\mathbf{b}|| \\sin(\\theta)$. This magnitude is equal to the area of the parallelogram formed by the two vectors.</p>
<p class="mb-4">Two non-zero vectors are parallel if and only if their cross product is the zero vector.</p>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Find the dot product of the vectors $\\mathbf{a} = \\langle 1, 2, -3 \\rangle$ and $\\mathbf{b} = \\langle 4, 0, 5 \\rangle$.",
                  options: [
                    { text: "-11", isCorrect: true },
                    { text: "19", isCorrect: false },
                    { text: "0", isCorrect: false },
                    { text: "11", isCorrect: false }
                  ],
                  explanation: "The dot product is calculated as $a_1b_1 + a_2b_2 + a_3b_3$. So, $\\mathbf{a} \\cdot \\mathbf{b} = (1)(4) + (2)(0) + (-3)(5) = 4 + 0 - 15 = -11$."
                },
                {
                  question: "The angle between two vectors of magnitude 4 and 5 is $60^\\circ$. What is their dot product?",
                  options: [
                    { text: "20", isCorrect: false },
                    { text: "10", isCorrect: true },
                    { text: "17.32", isCorrect: false },
                    { text: "10$\\sqrt{3}$", isCorrect: false }
                  ],
                  explanation: "Use the geometric formula $\\mathbf{a} \\cdot \\mathbf{b} = ||\\mathbf{a}|| \\, ||\\mathbf{b}|| \\cos(\\theta)$. Given $||\\mathbf{a}||=4$, $||\\mathbf{b}||=5$, and $\\theta=60^\\circ$. We know that $\\cos(60^\\circ) = 0.5$. So, $\\mathbf{a} \\cdot \\mathbf{b} = (4)(5)(0.5) = 10$."
                },
                {
                  question: "For what value of $k$ are the vectors $\\mathbf{u} = \\langle 2, k, -1 \\rangle$ and $\\mathbf{v} = \\langle 3, -2, 4 \\rangle$ orthogonal?",
                  options: [
                    { text: "1", isCorrect: true },
                    { text: "-1", isCorrect: false },
                    { text: "5", isCorrect: false },
                    { text: "10", isCorrect: false }
                  ],
                  explanation: "Two vectors are orthogonal if their dot product is zero. $\\mathbf{u} \\cdot \\mathbf{v} = (2)(3) + (k)(-2) + (-1)(4) = 6 - 2k - 4 = 2 - 2k$. Set the dot product to zero: $2 - 2k = 0 \\implies 2 = 2k \\implies k = 1$."
                },
                {
                  question: "Find the cross product $\\mathbf{i} \\times \\mathbf{j}$.",
                  options: [
                    { text: "0", isCorrect: false },
                    { text: "$\\mathbf{i}$", isCorrect: false },
                    { text: "$\\mathbf{j}$", isCorrect: false },
                    { text: "$\\mathbf{k}$", isCorrect: true }
                  ],
                  explanation: "The cross products of the standard unit vectors follow a cyclic pattern based on the right-hand rule. $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$, $\\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}$, and $\\mathbf{k} \\times \\mathbf{i} = \\mathbf{j}$."
                },
                {
                  question: "Calculate the cross product of $\\mathbf{a} = \\langle 1, 0, 2 \\rangle$ and $\\mathbf{b} = \\langle 0, 3, 0 \\rangle$.",
                  options: [
                    { text: "$\\langle -6, 0, 3 \\rangle$", isCorrect: true },
                    { text: "$\\langle 6, 0, -3 \\rangle$", isCorrect: false },
                    { text: "$\\langle 0, -6, 3 \\rangle$", isCorrect: false },
                    { text: "0", isCorrect: false }
                  ],
                  explanation: "Use the determinant formula: $\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 0 & 2 \\\\ 0 & 3 & 0 \\end{vmatrix} = \\mathbf{i}(0\\cdot0 - 2\\cdot3) - \\mathbf{j}(1\\cdot0 - 2\\cdot0) + \\mathbf{k}(1\\cdot3 - 0\\cdot0) = -6\\mathbf{i} - 0\\mathbf{j} + 3\\mathbf{k} = \\langle -6, 0, 3 \\rangle$."
                }
              ]
            } }, 
            { name: 'Gradient, Divergence and Curl', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. The Del Operator</h3>
<p class="mb-4">The gradient, divergence, and curl are all differential operators that involve the vector differential operator, del, denoted by $\\nabla$. In Cartesian coordinates, it is defined as:</p>
$$\\nabla = \\mathbf{i}\\frac{\\partial}{\\partial x} + \\mathbf{j}\\frac{\\partial}{\\partial y} + \\mathbf{k}\\frac{\\partial}{\\partial z}$$
<h3 class="text-lg font-semibold mb-2">2. Gradient</h3>
<p class="mb-4">The gradient operates on a scalar field (a function with a scalar value at each point, like temperature) and produces a vector field. The gradient vector points in the direction of the greatest rate of increase of the scalar field, and its magnitude is that greatest rate of change.</p>
<p class="mb-4">For a scalar function $f(x, y, z)$, the gradient is:</p>
$$\\text{grad}(f) = \\nabla f = \\frac{\\partial f}{\\partial x}\\mathbf{i} + \\frac{\\partial f}{\\partial y}\\mathbf{j} + \\frac{\\partial f}{\\partial z}\\mathbf{k}$$
<h3 class="text-lg font-semibold mb-2">3. Divergence</h3>
<p class="mb-4">The divergence operates on a vector field (a function with a vector value at each point, like fluid velocity) and produces a scalar field. The divergence measures the magnitude of a vector field's source or sink at a given point. A positive divergence indicates a source (outflow), while a negative divergence indicates a sink (inflow).</p>
<p class="mb-4">For a vector field $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$, the divergence is the dot product of $\\nabla$ and $\\mathbf{F}$:</p>
$$\\text{div}(\\mathbf{F}) = \\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$$
<h3 class="text-lg font-semibold mb-2">4. Curl</h3>
<p class="mb-4">The curl operates on a 3D vector field and produces another 3D vector field. The curl measures the tendency of the vector field to rotate about a point. The direction of the curl vector indicates the axis of rotation, and its magnitude indicates the magnitude of the rotation.</p>
<p class="mb-4">For a vector field $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$, the curl is the cross product of $\\nabla$ and $\\mathbf{F}$:</p>
$$\\text{curl}(\\mathbf{F}) = \\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}$$
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Find the gradient of the scalar function $f(x, y) = x^2y + y^3$ at the point (2, 1).",
                  options: [
                    { text: "$\\langle 4, 7 \\rangle$", isCorrect: true },
                    { text: "$\\langle 2, 3 \\rangle$", isCorrect: false },
                    { text: "$\\langle 4, 3 \\rangle$", isCorrect: false },
                    { text: "11", isCorrect: false }
                  ],
                  explanation: "First, find the partial derivatives: $\\frac{\\partial f}{\\partial x} = 2xy$ and $\\frac{\\partial f}{\\partial y} = x^2 + 3y^2$. The gradient is $\\nabla f = \\langle 2xy, x^2 + 3y^2 \\rangle$. Now evaluate at the point (2, 1): $\\nabla f(2, 1) = \\langle 2(2)(1), (2)^2 + 3(1)^2 \\rangle = \\langle 4, 4+3 \\rangle = \\langle 4, 7 \\rangle$."
                },
                {
                  question: "Calculate the divergence of the vector field $\\mathbf{F}(x, y, z) = x^2\\mathbf{i} + y^2\\mathbf{j} + z^2\\mathbf{k}$.",
                  options: [
                    { text: "$2x + 2y + 2z$", isCorrect: true },
                    { text: "0", isCorrect: false },
                    { text: "$x^2+y^2+z^2$", isCorrect: false },
                    { text: "$\\langle 2x, 2y, 2z \\rangle$", isCorrect: false }
                  ],
                  explanation: "The divergence is $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$. Here, $P=x^2, Q=y^2, R=z^2$. So, $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial}{\\partial x}(x^2) + \\frac{\\partial}{\\partial y}(y^2) + \\frac{\\partial}{\\partial z}(z^2) = 2x + 2y + 2z$."
                },
                {
                  question: "A vector field with zero divergence is called:",
                  options: [
                    { text: "Incompressible or solenoidal", isCorrect: true },
                    { text: "Irrotational or conservative", isCorrect: false },
                    { text: "A gradient field", isCorrect: false },
                    { text: "A constant field", isCorrect: false }
                  ],
                  explanation: "A vector field $\\mathbf{F}$ is called incompressible or solenoidal if its divergence is zero, i.e., $\\nabla \\cdot \\mathbf{F} = 0$. This is a key concept in fluid dynamics, where it represents a flow with no sources or sinks."
                },
                {
                  question: "Find the curl of the vector field $\\mathbf{F}(x, y, z) = y\\mathbf{i} - x\\mathbf{j} + 0\\mathbf{k}$.",
                  options: [
                    { text: "0", isCorrect: false },
                    { text: "$-2\\mathbf{k}$", isCorrect: true },
                    { text: "$2\\mathbf{k}$", isCorrect: false },
                    { text: "$\\mathbf{i} - \\mathbf{j}$", isCorrect: false }
                  ],
                  explanation: "The curl is $\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ y & -x & 0 \\end{vmatrix}$. Expanding this gives $\\mathbf{i}(\\frac{\\partial}{\\partial y}(0) - \\frac{\\partial}{\\partial z}(-x)) - \\mathbf{j}(\\frac{\\partial}{\\partial x}(0) - \\frac{\\partial}{\\partial z}(y)) + \\mathbf{k}(\\frac{\\partial}{\\partial x}(-x) - \\frac{\\partial}{\\partial y}(y)) = \\mathbf{i}(0-0) - \\mathbf{j}(0-0) + \\mathbf{k}(-1-1) = -2\\mathbf{k}$."
                },
                {
                  question: "If the curl of a vector field is the zero vector, the field is called:",
                  options: [
                    { text: "Solenoidal", isCorrect: false },
                    { text: "Conservative or irrotational", isCorrect: true },
                    { text: "A constant field", isCorrect: false },
                    { text: "A unit field", isCorrect: false }
                  ],
                  explanation: "A vector field $\\mathbf{F}$ is called conservative or irrotational if its curl is the zero vector, i.e., $\\nabla \\times \\mathbf{F} = \\mathbf{0}$. Conservative fields can be expressed as the gradient of a scalar potential function."
                }
              ]
            } },
          ] 
        },
        { 
          name: 'Numerical Methods', 
          subtopics: [
            { name: "Newton’s Method of Root Extraction", content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Concept</h3>
<p class="mb-4">Newton's Method (also known as the Newton-Raphson method) is an iterative numerical technique used to find successively better approximations to the roots (or zeros) of a real-valued function. It starts with an initial guess and uses the tangent line at that point to find the next, hopefully closer, guess.</p>
<h3 class="text-lg font-semibold mb-2">2. The Formula</h3>
<p class="mb-4">Given a function $f(x)$ and its derivative $f'(x)$, we start with an initial guess $x_0$. The iterative formula to find the next approximation, $x_{n+1}$, from the current one, $x_n$, is:</p>
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
<p class="mb-4">This process is repeated until the value of $x_{n+1}$ is sufficiently close to $x_n$, indicating that we have converged to a root.</p>
<h3 class="text-lg font-semibold mb-2">3. Potential Issues</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Division by Zero:</strong> The method fails if $f'(x_n) = 0$ at any iteration, as this corresponds to a horizontal tangent line that will not intersect the x-axis.</li>
    <li><strong>Poor Initial Guess:</strong> A bad starting guess $x_0$ can cause the method to diverge or converge to a different root than the one desired.</li>
    <li><strong>Oscillation:</strong> For some functions, the iterations may oscillate between two or more values without converging.</li>
</ul>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "To find a root of the equation $x^2 - 2 = 0$ using Newton's method, what is the iterative formula?",
                  options: [
                    { text: "$x_{n+1} = x_n - \\frac{x_n^2 - 2}{2x_n}$", isCorrect: true },
                    { text: "$x_{n+1} = x_n - \\frac{2x_n}{x_n^2 - 2}$", isCorrect: false },
                    { text: "$x_{n+1} = \\frac{x_n^2 - 2}{2x_n}$", isCorrect: false },
                    { text: "$x_{n+1} = x_n - (x_n^2 - 2)$", isCorrect: false }
                  ],
                  explanation: "Here, $f(x) = x^2 - 2$ and its derivative is $f'(x) = 2x$. The Newton's method formula is $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$. Substituting the function and its derivative gives $x_{n+1} = x_n - \\frac{x_n^2 - 2}{2x_n}$."
                },
                {
                  question: "Using the formula $x_{n+1} = x_n - \\frac{x_n^2 - 2}{2x_n}$ to approximate $\\sqrt{2}$, what is the next approximation ($x_1$) if the initial guess is $x_0 = 1$?",
                  options: [
                    { text: "1.5", isCorrect: true },
                    { text: "2.0", isCorrect: false },
                    { text: "1.4", isCorrect: false },
                    { text: "1.0", isCorrect: false }
                  ],
                  explanation: "Plug $x_0 = 1$ into the formula: $x_1 = 1 - \\frac{(1)^2 - 2}{2(1)} = 1 - \\frac{1 - 2}{2} = 1 - \\frac{-1}{2} = 1 + 0.5 = 1.5$."
                },
                {
                  question: "Perform a second iteration to find $x_2$ for approximating $\\sqrt{2}$, starting from $x_1 = 1.5$.",
                  options: [
                    { text: "1.414", isCorrect: false },
                    { text: "1.4167", isCorrect: true },
                    { text: "1.42", isCorrect: false },
                    { text: "1.5", isCorrect: false }
                  ],
                  explanation: "Use the formula with $x_1 = 1.5$: $x_2 = 1.5 - \\frac{(1.5)^2 - 2}{2(1.5)} = 1.5 - \\frac{2.25 - 2}{3} = 1.5 - \\frac{0.25}{3} \\approx 1.5 - 0.0833 = 1.4167$."
                },
                {
                  question: "For which initial guess $x_0$ would Newton's method fail when applied to the function $f(x) = x^3 - 3x + 1$?",
                  options: [
                    { text: "x = 0", isCorrect: false },
                    { text: "x = 2", isCorrect: false },
                    { text: "x = 1", isCorrect: true },
                    { text: "x = -2", isCorrect: false }
                  ],
                  explanation: "Newton's method fails if the derivative is zero. The derivative is $f'(x) = 3x^2 - 3$. Set this to zero: $3x^2 - 3 = 0 \\implies 3x^2 = 3 \\implies x^2 = 1 \\implies x = \\pm 1$. So, the method would fail with an initial guess of $x=1$ or $x=-1$."
                },
                {
                  question: "Newton's method is used to find a root for $f(x) = e^x - 2$. Find the iterative formula.",
                  options: [
                    { text: "$x_{n+1} = x_n - \\frac{e^{x_n} - 2}{e^{x_n}}$", isCorrect: true },
                    { text: "$x_{n+1} = x_n - (e^{x_n} - 2)$", isCorrect: false },
                    { text: "$x_{n+1} = x_n - \\frac{e^{x_n}}{e^{x_n} - 2}$", isCorrect: false },
                    { text: "$x_{n+1} = 1 - \\frac{2}{e^{x_n}}$", isCorrect: false }
                  ],
                  explanation: "Here, $f(x) = e^x - 2$ and its derivative is $f'(x) = e^x$. The iterative formula is $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)} = x_n - \\frac{e^{x_n} - 2}{e^{x_n}}$."
                }
              ]
            } }, 
            { name: "Newton’s Method of Minimization", content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Concept</h3>
<p class="mb-4">Newton's method can also be adapted to find a local minimum or maximum of a function $f(x)$. A minimum or maximum occurs where the derivative of the function is zero, i.e., $f'(x)=0$. Therefore, finding the minimum of a function $f(x)$ is equivalent to finding a root of its derivative, $f'(x)$.</p>
<h3 class="text-lg font-semibold mb-2">2. The Formula</h3>
<p class="mb-4">To apply Newton's method for minimization, we apply the standard root-finding formula to the function $g(x) = f'(x)$. This requires finding the derivative of $g(x)$, which is the second derivative of the original function, $g'(x) = f''(x)$.</p>
<p class="mb-4">The iterative formula for finding a minimum of $f(x)$ is:</p>
$$x_{n+1} = x_n - \\frac{f'(x_n)}{f''(x_n)}$$
<p class="mb-4">This process finds a critical point. To confirm it is a minimum, you would typically check that the second derivative is positive ($f''(x) > 0$) near the solution.</p>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "To find the minimum of the function $f(x) = x^2 - 4x + 10$, what is the iterative formula using Newton's method?",
                  options: [
                    { text: "$x_{n+1} = x_n - \\frac{2x_n - 4}{2}$", isCorrect: true },
                    { text: "$x_{n+1} = x_n - \\frac{x_n^2 - 4x_n + 10}{2x_n - 4}$", isCorrect: false },
                    { text: "$x_{n+1} = x_n - (x_n - 2)$", isCorrect: false },
                    { text: "$x_{n+1} = 2$", isCorrect: false }
                  ],
                  explanation: "We need the first and second derivatives. $f'(x) = 2x - 4$ and $f''(x) = 2$. The iterative formula is $x_{n+1} = x_n - \\frac{f'(x_n)}{f''(x_n)} = x_n - \\frac{2x_n - 4}{2}$."
                },
                {
                  question: "Use one iteration of Newton's method to find the minimum of $f(x) = x^2 - 4x + 10$, starting with an initial guess of $x_0 = 5$.",
                  options: [
                    { text: "2", isCorrect: true },
                    { text: "3", isCorrect: false },
                    { text: "2.5", isCorrect: false },
                    { text: "4", isCorrect: false }
                  ],
                  explanation: "Using the formula from the previous question: $x_1 = x_0 - \\frac{2x_0 - 4}{2} = 5 - \\frac{2(5) - 4}{2} = 5 - \\frac{10 - 4}{2} = 5 - \\frac{6}{2} = 5 - 3 = 2$. In this case, since the second derivative is a constant, the method converges in one step."
                },
                {
                  question: "What is the iterative formula for finding a critical point of $f(x) = x^3 - 6x^2 + 5$?",
                  options: [
                    { text: "$x_{n+1} = x_n - \\frac{3x_n^2 - 12x_n}{6x_n - 12}$", isCorrect: true },
                    { text: "$x_{n+1} = x_n - \\frac{x_n^3 - 6x_n^2 + 5}{3x_n^2 - 12x_n}$", isCorrect: false },
                    { text: "$x_{n+1} = x_n - \\frac{6x_n - 12}{3x_n^2 - 12x_n}$", isCorrect: false },
                    { text: "$x_{n+1} = x_n - (x_n - 2)$", isCorrect: false }
                  ],
                  explanation: "First, find the derivatives: $f'(x) = 3x^2 - 12x$ and $f''(x) = 6x - 12$. The iterative formula is $x_{n+1} = x_n - \\frac{f'(x_n)}{f''(x_n)}$, which gives $x_{n+1} = x_n - \\frac{3x_n^2 - 12x_n}{6x_n - 12}$."
                },
                {
                  question: "Using the formula from the previous question, perform one iteration to find a critical point of $f(x) = x^3 - 6x^2 + 5$ starting with $x_0 = 5$.",
                  options: [
                    { text: "4.17", isCorrect: true },
                    { text: "4.0", isCorrect: false },
                    { text: "4.5", isCorrect: false },
                    { text: "5.0", isCorrect: false }
                  ],
                  explanation: "Plug $x_0=5$ into the formula: $x_1 = 5 - \\frac{3(5)^2 - 12(5)}{6(5) - 12} = 5 - \\frac{3(25) - 60}{30 - 12} = 5 - \\frac{75 - 60}{18} = 5 - \\frac{15}{18} \\approx 5 - 0.833 = 4.167$."
                },
                {
                  question: "To find the maximum of a function $f(x)$, one can find the minimum of which function?",
                  options: [
                    { text: "$-f(x)$", isCorrect: true },
                    { text: "$f'(x)$", isCorrect: false },
                    { text: "$1/f(x)$", isCorrect: false },
                    { text: "$f(x)^2$", isCorrect: false }
                  ],
                  explanation: "Maximizing a function $f(x)$ is equivalent to minimizing its negative, $-f(x)$. Therefore, you can apply Newton's method for minimization to the function $g(x) = -f(x)$ to find a maximum of $f(x)$."
                }
              ]
            } }, 
            { name: "Forward Rectangle Rule", content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Numerical Integration</h3>
<p class="mb-4">Numerical integration, or quadrature, is the process of approximating the value of a definite integral $\\int_a^b f(x) dx$. This is often necessary when an analytical antiderivative is difficult or impossible to find.</p>
<h3 class="text-lg font-semibold mb-2">2. Rectangle Rule (Riemann Sum)</h3>
<p class="mb-4">The rectangle rule approximates the area under the curve by summing the areas of a number of rectangles. The interval $[a, b]$ is divided into $n$ subintervals of equal width, $\\Delta x = \\frac{b-a}{n}$.</p>
<h3 class="text-lg font-semibold mb-2">3. Forward Rectangle Rule (Left Riemann Sum)</h3>
<p class="mb-4">The <strong>Forward Rectangle Rule</strong>, also known as the Left Riemann Sum, uses the function value at the <strong>left endpoint</strong> of each subinterval as the height of the rectangle.</p>
<p class="mb-4">The formula is:</p>
$$\\int_a^b f(x) dx \\approx \\sum_{i=0}^{n-1} f(x_i) \\Delta x$$
<p class="mb-4">where $x_i = a + i \\Delta x$. This is equivalent to:</p>
$$\\Delta x [f(x_0) + f(x_1) + ... + f(x_{n-1})]$$
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Approximate $\\int_0^4 x^2 dx$ using the Forward Rectangle Rule with $n=4$ subintervals.",
                  options: [
                    { text: "14", isCorrect: true },
                    { text: "30", isCorrect: false },
                    { text: "21.33", isCorrect: false },
                    { text: "20", isCorrect: false }
                  ],
                  explanation: "The interval is $[0, 4]$ and $n=4$, so the width of each subinterval is $\\Delta x = \\frac{4-0}{4} = 1$. The endpoints are $x_0=0, x_1=1, x_2=2, x_3=3, x_4=4$. The Forward Rectangle Rule uses the left endpoints, so we use $x_0, x_1, x_2, x_3$. The approximation is $\\Delta x [f(x_0) + f(x_1) + f(x_2) + f(x_3)] = 1[0^2 + 1^2 + 2^2 + 3^2] = 1[0 + 1 + 4 + 9] = 14$."
                },
                {
                  question: "Using the Forward Rectangle Rule, the approximation of an integral of a monotonically increasing function will be an:",
                  options: [
                    { text: "Underestimate", isCorrect: true },
                    { text: "Overestimate", isCorrect: false },
                    { text: "Exact value", isCorrect: false },
                    { text: "It depends on the function's concavity", isCorrect: false }
                  ],
                  explanation: "For an increasing function, the left endpoint is the lowest point in each subinterval. Using this lowest point as the height of the rectangle will result in a total area that is less than the true area under the curve. Therefore, it will be an underestimate."
                },
                {
                  question: "Approximate $\\int_1^3 \\frac{1}{x} dx$ using the Forward Rectangle Rule with $n=2$ subintervals.",
                  options: [
                    { text: "0.833", isCorrect: true },
                    { text: "1.5", isCorrect: false },
                    { text: "1.098", isCorrect: false },
                    { text: "0.5", isCorrect: false }
                  ],
                  explanation: "The Forward Rectangle Rule often refers to the Right Riemann Sum, using the right endpoint of each subinterval. Here, $\\Delta x = 1$, and the right endpoints are $x_1=2$ and $x_2=3$. The approximation is $\\Delta x [f(x_1) + f(x_2)] = 1[\\frac{1}{2} + \\frac{1}{3}] = 1[\\frac{3}{6} + \\frac{2}{6}] = \\frac{5}{6} \\approx 0.833$."
                },
                {
                  question: "To approximate $\\int_2^6 f(x)dx$ with the Forward Rectangle Rule and $n=8$, what is the width of each subinterval, $\\Delta x$?",
                  options: [
                    { text: "0.5", isCorrect: true },
                    { text: "1", isCorrect: false },
                    { text: "2", isCorrect: false },
                    { text: "4", isCorrect: false }
                  ],
                  explanation: "The width of each subinterval is given by the formula $\\Delta x = \\frac{b-a}{n}$. Here, $a=2, b=6, n=8$. So, $\\Delta x = \\frac{6-2}{8} = \\frac{4}{8} = 0.5$."
                },
                {
                  question: "Using the Forward Rectangle Rule, the approximation of an integral of a monotonically decreasing function will be an:",
                  options: [
                    { text: "Underestimate", isCorrect: false },
                    { text: "Overestimate", isCorrect: true },
                    { text: "Exact value", isCorrect: false },
                    { text: "It depends on the function's concavity", isCorrect: false }
                  ],
                  explanation: "Assuming 'Forward' means the Right Riemann Sum: for a decreasing function, the right endpoint is the lowest point in each subinterval. Using this height will result in an underestimate. If 'Forward' means the Left Riemann Sum: the left endpoint is the highest point, resulting in an overestimate. Given the ambiguity in the term, and common convention associating left with underestimate for increasing functions, the opposite holds for decreasing. Left Riemann Sum on a decreasing function is an overestimate."
                }
              ]
            } }, 
            { name: "Trapezoidal Rule", content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Concept</h3>
<p class="mb-4">The Trapezoidal Rule is a numerical integration technique that provides a better approximation than the rectangle rule. Instead of using rectangles, it approximates the area under the curve by summing the areas of a number of trapezoids.</p>
<p class="mb-4">The area of each trapezoid is the average of the function values at the left and right endpoints, multiplied by the width of the interval.</p>
<h3 class="text-lg font-semibold mb-2">2. The Formula</h3>
<p class="mb-4">For an integral $\\int_a^b f(x) dx$ divided into $n$ subintervals of equal width $\\Delta x = \\frac{b-a}{n}$, the Trapezoidal Rule is given by:</p>
$$\\int_a^b f(x) dx \\approx \\frac{\\Delta x}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + ... + 2f(x_{n-1}) + f(x_n)]$$
<p class="mb-4">Note that the first and last function values have a coefficient of 1, while all the intermediate function values have a coefficient of 2.</p>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Approximate $\\int_0^4 x^2 dx$ using the Trapezoidal Rule with $n=4$ subintervals.",
                  options: [
                    { text: "22", isCorrect: true },
                    { text: "30", isCorrect: false },
                    { text: "21.33", isCorrect: false },
                    { text: "14", isCorrect: false }
                  ],
                  explanation: "The interval is $[0, 4]$ and $n=4$, so $\\Delta x = \\frac{4-0}{4} = 1$. The endpoints are $x_0=0, x_1=1, x_2=2, x_3=3, x_4=4$. The formula is $\\frac{\\Delta x}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + f(x_4)]$. Plugging in the values: $\\frac{1}{2} [0^2 + 2(1^2) + 2(2^2) + 2(3^2) + 4^2] = \\frac{1}{2} [0 + 2(1) + 2(4) + 2(9) + 16] = \\frac{1}{2} [0 + 2 + 8 + 18 + 16] = \\frac{1}{2} [44] = 22$. (The exact value is $64/3 \\approx 21.33$)."
                },
                {
                  question: "The error in the Trapezoidal Rule approximation is proportional to which of the following, where $h = \\Delta x$?",
                  options: [
                    { text: "$h$", isCorrect: false },
                    { text: "$h^2$", isCorrect: true },
                    { text: "$h^3$", isCorrect: false },
                    { text: "$h^4$", isCorrect: false }
                  ],
                  explanation: "The global error for the Trapezoidal Rule is on the order of $O(h^2)$. This means that if you halve the step size ($h$), the error is reduced by a factor of approximately 4. This is more accurate than the Rectangle Rule, which has an error of $O(h)$."
                },
                {
                  question: "Approximate $\\int_1^3 \\frac{1}{x} dx$ using the Trapezoidal Rule with $n=2$ subintervals.",
                  options: [
                    { text: "1.083", isCorrect: false },
                    { text: "1.167", isCorrect: true },
                    { text: "1.0", isCorrect: false },
                    { text: "1.25", isCorrect: false }
                  ],
                  explanation: "The interval is $[1, 3]$ and $n=2$, so $\\Delta x = \\frac{3-1}{2} = 1$. The endpoints are $x_0=1, x_1=2, x_2=3$. The formula is $\\frac{\\Delta x}{2} [f(x_0) + 2f(x_1) + f(x_2)]$. This is for more than one trapezoid. With n=2, we have two trapezoids, so we use $x_0, x_1, x_2$. $\\frac{1}{2}[f(1) + 2f(2) + f(3)]$. No wait, the formula is correct. $\\frac{1}{2} [1/1 + 2(1/2) + 1/3] = 0.5 * (1 + 1 + 1/3) = 0.5 * (7/3) = 7/6 \\approx 1.167$. (The true value is $\\ln(3) \\approx 1.098$)."
                },
                {
                  question: "For a function that is concave up, the Trapezoidal Rule provides an:",
                  options: [
                    { text: "Underestimate", isCorrect: false },
                    { text: "Overestimate", isCorrect: true },
                    { text: "Exact value", isCorrect: false },
                    { text: "Depends on if the function is increasing or decreasing", isCorrect: false }
                  ],
                  explanation: "When a function is concave up, the straight line connecting two endpoints of a subinterval (the top of the trapezoid) lies above the curve. Therefore, the area of the trapezoid will be slightly larger than the true area under the curve, resulting in an overestimate."
                },
                {
                  question: "Evaluate $\\int_0^2 (x^3+1) dx$ using the Trapezoidal Rule with $n=2$.",
                  options: [
                    { text: "6", isCorrect: false },
                    { text: "7", isCorrect: true },
                    { text: "8", isCorrect: false },
                    { text: "5", isCorrect: false }
                  ],
                  explanation: "Here $a=0, b=2, n=2$, so $\\Delta x = (2-0)/2 = 1$. The points are $x_0=0, x_1=1, x_2=2$. The function is $f(x)=x^3+1$. $f(0)=1, f(1)=2, f(2)=9$. Using the formula: $T = \\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + f(x_2)] = \\frac{1}{2}[1 + 2(2) + 9] = \\frac{1}{2}[1 + 4 + 9] = \\frac{14}{2} = 7$. (The exact value is $[\frac{x^4}{4}+x]_0^2 = (\frac{16}{4}+2) - 0 = 6$)."
                }
              ]
            } }, 
            { name: "Simpson’s Rule", content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Concept</h3>
<p class="mb-4">Simpson's Rule is another numerical integration method that often provides a much better approximation than the Trapezoidal Rule. Instead of using straight line segments, Simpson's Rule approximates the function over pairs of subintervals using a parabola (a second-degree polynomial).</p>
<p class="mb-4">Because it uses parabolas, it requires an <strong>even number of subintervals</strong>, $n$.</p>
<h3 class="text-lg font-semibold mb-2">2. Simpson's 1/3 Rule Formula</h3>
<p class="mb-4">For an integral $\\int_a^b f(x) dx$ divided into an even number of subintervals $n$ of equal width $\\Delta x = \\frac{b-a}{n}$, Simpson's 1/3 Rule is given by:</p>
$$\\int_a^b f(x) dx \\approx \\frac{\\Delta x}{3} [f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + ... + 2f(x_{n-2}) + 4f(x_{n-1}) + f(x_n)]$$
<p class="mb-4">The pattern of coefficients for the function values is 1, 4, 2, 4, 2, ..., 4, 1.</p>
<h3 class="text-lg font-semibold mb-2">3. Accuracy</h3>
<p class="mb-4">Simpson's Rule is exact for quadratic and cubic polynomials. The global error is proportional to $h^4$ (where $h = \\Delta x$), making it significantly more accurate than the Trapezoidal Rule for smooth functions.</p>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Approximate $\\int_0^4 x^2 dx$ using Simpson's Rule with $n=4$ subintervals.",
                  options: [
                    { text: "21.33", isCorrect: true },
                    { text: "22", isCorrect: false },
                    { text: "20", isCorrect: false },
                    { text: "21", isCorrect: false }
                  ],
                  explanation: "The interval is $[0, 4]$ and $n=4$, so $\\Delta x = 1$. The endpoints are $x_0=0, x_1=1, x_2=2, x_3=3, x_4=4$. The formula is $\\frac{\\Delta x}{3} [f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + f(x_4)]$. Plugging in values: $\\frac{1}{3} [0^2 + 4(1^2) + 2(2^2) + 4(3^2) + 4^2] = \\frac{1}{3} [0 + 4(1) + 2(4) + 4(9) + 16] = \\frac{1}{3} [0 + 4 + 8 + 36 + 16] = \\frac{64}{3} \\approx 21.33$. Since Simpson's rule is exact for polynomials of degree up to 3, this is the exact answer."
                },
                {
                  question: "To use Simpson's Rule, the number of subintervals $n$ must be:",
                  options: [
                    { text: "Odd", isCorrect: false },
                    { text: "Even", isCorrect: true },
                    { text: "A multiple of 3", isCorrect: false },
                    { text: "Any integer > 1", isCorrect: false }
                  ],
                  explanation: "Simpson's Rule works by fitting parabolas over pairs of subintervals. Therefore, the total number of subintervals must be an even number."
                },
                {
                  question: "What is the pattern of coefficients inside the brackets for Simpson's 1/3 Rule?",
                  options: [
                    { text: "1, 2, 2, ..., 2, 1", isCorrect: false },
                    { text: "1, 4, 2, 4, ..., 4, 1", isCorrect: true },
                    { text: "1, 1, 1, ..., 1, 1", isCorrect: false },
                    { text: "1, 3, 3, 1", isCorrect: false }
                  ],
                  explanation: "The coefficients follow the pattern 1, 4, 2, 4, 2, ... ending with 4, 1. The first and last terms are multiplied by 1, the odd-indexed terms are multiplied by 4, and the even-indexed intermediate terms are multiplied by 2."
                },
                {
                  question: "Approximate $\\int_0^2 x^3 dx$ using Simpson's rule with $n=2$.",
                  options: [
                    { text: "4", isCorrect: true },
                    { text: "5", isCorrect: false },
                    { text: "3.5", isCorrect: false },
                    { text: "4.5", isCorrect: false }
                  ],
                  explanation: "Here $a=0, b=2, n=2$, so $\\Delta x = 1$. The points are $x_0=0, x_1=1, x_2=2$. The function is $f(x)=x^3$. $f(0)=0, f(1)=1, f(2)=8$. Using the formula: $S = \\frac{\\Delta x}{3}[f(x_0) + 4f(x_1) + f(x_2)] = \\frac{1}{3}[0 + 4(1) + 8] = \\frac{12}{3} = 4$. This is the exact value because Simpson's rule is exact for cubic polynomials."
                },
                {
                  question: "The error in Simpson's Rule approximation is proportional to which of the following, where $h = \\Delta x$?",
                  options: [
                    { text: "$h$", isCorrect: false },
                    { text: "$h^2$", isCorrect: false },
                    { text: "$h^3$", isCorrect: false },
                    { text: "$h^4$", isCorrect: true }
                  ],
                  explanation: "The global error for Simpson's Rule is on the order of $O(h^4)$. This means that halving the step size reduces the error by a factor of approximately 16, making it a very powerful method for numerical integration."
                }
              ]
            } }, 
            { name: "Taylor’s and McLaurin’s Series", content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Concept</h3>
<p class="mb-4">A Taylor Series is a representation of a function as an infinite sum of terms, calculated from the values of the function's derivatives at a single point. It allows us to approximate complicated functions using simpler polynomial functions.</p>
<h3 class="text-lg font-semibold mb-2">2. Taylor Series Formula</h3>
<p class="mb-4">The Taylor series of a real or complex-valued function $f(x)$ that is infinitely differentiable at a real number $a$ is the power series:</p>
$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n$$
$$= f(a) + \\frac{f'(a)}{1!}(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\frac{f'''(a)}{3!}(x-a)^3 + \\cdots$$
<p class="mb-4">where $f^{(n)}(a)$ denotes the $n$-th derivative of $f$ evaluated at the point $a$.</p>
<h3 class="text-lg font-semibold mb-2">3. Maclaurin Series</h3>
<p class="mb-4">A Maclaurin series is a special case of the Taylor series where the expansion is centered at $a=0$.</p>
$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\cdots$$
<h3 class="text-lg font-semibold mb-2">4. Common Maclaurin Series</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$</li>
    <li>$\\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$</li>
    <li>$\\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}$</li>
    <li>$\\frac{1}{1-x} = 1 + x + x^2 + x^3 + \\cdots = \\sum_{n=0}^\\infty x^n$ (for $|x|<1$)</li>
</ul>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "What is the Maclaurin series for $f(x) = e^x$?",
                  options: [
                    { text: "$1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$", isCorrect: true },
                    { text: "$1 - x + \\frac{x^2}{2!} - \\frac{x^3}{3!} + \\cdots$", isCorrect: false },
                    { text: "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$", isCorrect: false },
                    { text: "$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$", isCorrect: false }
                  ],
                  explanation: "The derivatives of $f(x)=e^x$ are all $e^x$. At $a=0$, $f^{(n)}(0) = e^0 = 1$ for all $n$. The Maclaurin series is $\\sum \\frac{f^{(n)}(0)}{n!}x^n = \\sum \\frac{1}{n!}x^n = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$."
                },
                {
                  question: "Find the first three non-zero terms of the Taylor series for $f(x) = \\ln(x)$ centered at $a=1$.",
                  options: [
                    { text: "$(x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3}$", isCorrect: true },
                    { text: "$1 + (x-1) - \\frac{(x-1)^2}{2}$", isCorrect: false },
                    { text: "$x - \\frac{x^2}{2} + \\frac{x^3}{3}$", isCorrect: false },
                    { text: "$(x-1) + \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{6}$", isCorrect: false }
                  ],
                  explanation: "We need the derivatives at $a=1$. $f(x)=\\ln(x) \\implies f(1)=0$. $f'(x)=1/x \\implies f'(1)=1$. $f''(x)=-1/x^2 \\implies f''(1)=-1$. $f'''(x)=2/x^3 \\implies f'''(1)=2$. The Taylor series is $f(1) + f'(1)(x-1) + \\frac{f''(1)}{2!}(x-1)^2 + \\frac{f'''(1)}{3!}(x-1)^3 + \\cdots = 0 + 1(x-1) + \\frac{-1}{2}(x-1)^2 + \\frac{2}{6}(x-1)^3 + \\cdots = (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} + \\cdots$"
                },
                {
                  question: "The Maclaurin series for $\\cos(x)$ is $1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$. Use this to find the series for $\\cos(2x)$.",
                  options: [
                    { text: "$1 - \\frac{2x^2}{2!} + \\frac{4x^4}{4!} - \\cdots$", isCorrect: false },
                    { text: "$1 - \\frac{4x^2}{2!} + \\frac{16x^4}{4!} - \\cdots$", isCorrect: true },
                    { text: "$2 - \\frac{8x^2}{2!} + \\frac{32x^4}{4!} - \\cdots$", isCorrect: false },
                    { text: "$1 - \\frac{x^2}{4!} + \\frac{x^4}{8!} - \\cdots$", isCorrect: false }
                  ],
                  explanation: "To find the series for $\\cos(2x)$, simply substitute $2x$ for $x$ in the original series for $\\cos(x)$. This gives $1 - \\frac{(2x)^2}{2!} + \\frac{(2x)^4}{4!} - \\cdots = 1 - \\frac{4x^2}{2!} + \\frac{16x^4}{4!} - \\cdots$."
                },
                {
                  question: "What function is represented by the Maclaurin series $x - x^2 + x^3 - x^4 + \\cdots$?",
                  options: [
                    { text: "$\\frac{1}{1-x}$", isCorrect: false },
                    { text: "$\\frac{1}{1+x}$", isCorrect: false },
                    { text: "$\\frac{x}{1+x}$", isCorrect: true },
                    { text: "$e^{-x}$", isCorrect: false }
                  ],
                  explanation: "This is a geometric series. We can factor out an $x$: $x(1 - x + x^2 - x^3 + \\cdots)$. The part in the parentheses is the geometric series for $\\frac{1}{1 - (-x)} = \\frac{1}{1+x}$. Therefore, the entire series is $x \\cdot \\frac{1}{1+x} = \\frac{x}{1+x}$."
                },
                {
                  question: "Using the approximation $\\sin(x) \\approx x - \\frac{x^3}{6}$, estimate the value of $\\sin(0.1)$.",
                  options: [
                    { text: "0.099833", isCorrect: true },
                    { text: "0.1", isCorrect: false },
                    { text: "0.099", isCorrect: false },
                    { text: "0.098333", isCorrect: false }
                  ],
                  explanation: "Plug $x=0.1$ into the approximation: $\\sin(0.1) \\approx 0.1 - \\frac{(0.1)^3}{6} = 0.1 - \\frac{0.001}{6} = 0.1 - 0.0001666... \\approx 0.099833$."
                }
              ]
            } },
          ]
        },
        { 
          name: 'Algorithm and Logic Development', 
          subtopics: [
            { name: 'Flowchart', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition</h3>
<p class="mb-4">A flowchart is a type of diagram that represents a workflow, algorithm, or process. It shows the steps as boxes of various kinds, and their order by connecting the boxes with arrows. This diagrammatic representation illustrates a solution model to a given problem.</p>
<h3 class="text-lg font-semibold mb-2">2. Common Flowchart Symbols</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Oval / Terminal:</strong> Represents the start or end point of the process.</li>
    <li><strong>Rectangle / Process:</strong> Represents an action or operation. For example, a calculation like "C = A + B".</li>
    <li><strong>Parallelogram / Input/Output:</strong> Represents data input (e.g., "Read A") or output (e.g., "Print C").</li>
    <li><strong>Diamond / Decision:</strong> Represents a point where a decision must be made. It has one input and two or more outputs (e.g., Yes/No, True/False).</li>
    <li><strong>Arrow / Flow Line:</strong> Indicates the direction of flow and connects the symbols.</li>
    <li><strong>Circle / Connector:</strong> Used to connect separate parts of a flowchart, often on the same page.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. Example: Calculate the Area of a Circle</h3>
<p class="mb-4">
    1. <strong>Start</strong> (Oval)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &darr;<br>
    2. <strong>Input Radius</strong> (Parallelogram)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &darr;<br>
    3. <strong>Area = &pi; * Radius^2</strong> (Rectangle)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &darr;<br>
    4. <strong>Print Area</strong> (Parallelogram)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &darr;<br>
    5. <strong>End</strong> (Oval)<br>
</p>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "In a flowchart, which symbol is used to represent the start or end of a program?",
                  options: [
                    { text: "Rectangle", isCorrect: false },
                    { text: "Diamond", isCorrect: false },
                    { text: "Oval", isCorrect: true },
                    { text: "Parallelogram", isCorrect: false }
                  ],
                  explanation: "An oval, or terminal symbol, is used to denote the start and end points of a process or algorithm in a flowchart."
                },
                {
                  question: "A diamond-shaped symbol in a flowchart is used for what purpose?",
                  options: [
                    { text: "Input/Output", isCorrect: false },
                    { text: "Calculation", isCorrect: false },
                    { text: "Decision", isCorrect: true },
                    { text: "Connector", isCorrect: false }
                  ],
                  explanation: "The diamond symbol represents a decision point. It typically contains a condition that evaluates to true or false, leading to two different paths in the flowchart."
                },
                {
                  question: "Which symbol would be used to represent the step 'Calculate a = b + c'?",
                  options: [
                    { text: "Rectangle", isCorrect: true },
                    { text: "Diamond", isCorrect: false },
                    { text: "Oval", isCorrect: false },
                    { text: "Parallelogram", isCorrect: false }
                  ],
                  explanation: "A rectangle represents a process or an action step. A calculation is a type of process, so a rectangle would be used."
                },
                {
                  question: "The instruction 'Read temperature from sensor' would be placed in which flowchart symbol?",
                  options: [
                    { text: "Rectangle", isCorrect: false },
                    { text: "Diamond", isCorrect: false },
                    { text: "Oval", isCorrect: false },
                    { text: "Parallelogram", isCorrect: true }
                  ],
                  explanation: "A parallelogram is used for any input or output operation. Reading data from a sensor is an input operation."
                },
                {
                  question: "What do the arrows in a flowchart represent?",
                  options: [
                    { text: "The flow of logic", isCorrect: true },
                    { text: "Data storage", isCorrect: false },
                    { text: "User inputs", isCorrect: false },
                    { text: "Program termination", isCorrect: false }
                  ],
                  explanation: "The arrows, or flow lines, indicate the direction of flow in the process, connecting the symbols and showing the sequence of operations."
                }
              ]
            } }, 
            { name: 'Pseudocode', content: {
              notes: `
<h3 class="text-lg font-semibold mb-2">1. Definition</h3>
<p class="mb-4">Pseudocode is an informal, high-level description of the operating principle of a computer program or other algorithm. It uses the structural conventions of a normal programming language, but is intended for human reading rather than machine reading. Pseudocode typically omits details that are essential for machine understanding of the algorithm, such as variable declarations and system-specific code.</p>
<h3 class="text-lg font-semibold mb-2">2. Purpose</h3>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li>To plan the logic of a program before writing the actual code.</li>
    <li>To communicate an algorithm to other people in a language-agnostic way.</li>
    <li>To bridge the gap between a flowchart and the final implementation.</li>
</ul>
<h3 class="text-lg font-semibold mb-2">3. Common Constructs</h3>
<p class="mb-4">Pseudocode uses common programming structures:</p>
<ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>INPUT/READ:</strong> Get data from the user or a file. (e.g., READ radius)</li>
    <li><strong>OUTPUT/PRINT:</strong> Display information. (e.g., PRINT area)</li>
    <li><strong>SET/INITIALIZE:</strong> Assign a value to a variable. (e.g., SET area = 3.14 * radius * radius)</li>
    <li><strong>IF...THEN...ELSE:</strong> Conditional logic.
        <pre class="bg-slate-100 dark:bg-slate-700 p-2 rounded"><code>IF condition THEN
    statements
ELSE
    other_statements
ENDIF</code></pre>
    </li>
    <li><strong>WHILE...ENDWHILE:</strong> A loop that continues as long as a condition is true.
        <pre class="bg-slate-100 dark:bg-slate-700 p-2 rounded"><code>WHILE condition
    statements
ENDWHILE</code></pre>
    </li>
    <li><strong>FOR...ENDFOR:</strong> A loop that iterates a specific number of times.
        <pre class="bg-slate-100 dark:bg-slate-700 p-2 rounded"><code>FOR counter FROM start TO end
    statements
ENDFOR</code></pre>
    </li>
</ul>
              `,
              video: "",
              aiVideo: "",
              solvedExamples: [
                {
                  question: "Which pseudocode keyword is used to get a value from the user?",
                  options: [
                    { text: "PRINT", isCorrect: false },
                    { text: "SET", isCorrect: false },
                    { text: "READ", isCorrect: true },
                    { text: "IF", isCorrect: false }
                  ],
                  explanation: "The keywords INPUT or READ are commonly used in pseudocode to represent receiving data from an external source, such as a user."
                },
                {
                  question: "What is the primary purpose of pseudocode?",
                  options: [
                    { text: "To be directly compiled and run on a computer.", isCorrect: false },
                    { text: "To serve as a standard for all programming languages.", isCorrect: false },
                    { text: "To plan and communicate the logic of an algorithm.", isCorrect: true },
                    { text: "To create graphical user interfaces.", isCorrect: false }
                  ],
                  explanation: "Pseudocode is a tool for planning and communication. It is language-independent and cannot be compiled; its purpose is to outline the logical steps of an algorithm for a human reader."
                },
                {
                  question: "Which construct is best for executing a block of code a known number of times?",
                  options: [
                    { text: "IF...THEN...ELSE", isCorrect: false },
                    { text: "WHILE loop", isCorrect: false },
                    { text: "FOR loop", isCorrect: true },
                    { text: "SET statement", isCorrect: false }
                  ],
                  explanation: "A FOR loop is specifically designed for iteration over a sequence or for a predetermined number of repetitions."
                },
                {
                  question: "Consider the pseudocode: SET x = 5, SET y = 10, IF x > y THEN PRINT 'Hello' ELSE PRINT 'World'. What is the output?",
                  options: [
                    { text: "Hello", isCorrect: false },
                    { text: "World", isCorrect: true },
                    { text: "Hello World", isCorrect: false },
                    { text: "No output", isCorrect: false }
                  ],
                  explanation: "The condition is 'IF x > y', which is 'IF 5 > 10'. This condition is false. Therefore, the code in the ELSE block is executed, which is 'PRINT 'World''."
                },
                {
                  question: "What does the following pseudocode do? SET total = 0, FOR i FROM 1 TO 5, SET total = total + i, ENDFOR, PRINT total",
                  options: [
                    { text: "Prints the numbers from 1 to 5.", isCorrect: false },
                    { text: "Prints the sum of the numbers from 1 to 5.", isCorrect: true },
                    { text: "Prints the final value of i, which is 5.", isCorrect: false },
                    { text: "Causes an error.", isCorrect: false }
                  ],
                  explanation: "The code initializes a 'total' to 0. The FOR loop then iterates for i = 1, 2, 3, 4, 5. In each iteration, it adds the value of i to the total. The final total will be $1+2+3+4+5=15$, which is then printed."
                }
              ]
            } },
          ]
        },
      ],
    },
    {
      name: '2. Probability and Statistics',
      topics: [
        { name: 'A. Probability distributions', subtopics: [{ name: 'A. Probability distributions', content: null }] },
        { name: 'B. Measures of central tendencies and dispersions', subtopics: [{ name: 'B. Measures of central tendencies and dispersions', content: null }] },
        { name: 'C. Expected value (weighted average) in decision making', subtopics: [{ name: 'C. Expected value (weighted average) in decision making', content: null }] },
        { name: 'D. Regression, curve fitting, and goodness of fit', subtopics: [{ name: 'D. Regression, curve fitting, and goodness of fit', content: null }] },
      ],
    },
    {
      name: '3. Ethics and Professional Practice',
      topics: [
        { name: 'A. Codes of ethics', subtopics: [{ name: 'A. Codes of ethics', content: null }] },
        { name: 'B. Public health, safety, and welfare', subtopics: [{ name: 'B. Public health, safety, and welfare', content: null }] },
        { name: 'C. Intellectual property', subtopics: [{ name: 'C. Intellectual property', content: null }] },
        { name: 'D. Societal considerations', subtopics: [{ name: 'D. Societal considerations', content: null }] },
      ],
    },
    {
      name: '4. Engineering Economics',
      topics: [
        { name: 'A. Time value of money', subtopics: [{ name: 'A. Time value of money', content: null }] },
        { name: 'B. Cost types and breakdowns', subtopics: [{ name: 'B. Cost types and breakdowns', content: null }] },
        { name: 'C. Economic analyses', subtopics: [{ name: 'C. Economic analyses', content: null }] },
      ],
    },
    {
      name: '5. Electricity and Magnetism',
      topics: [
        { name: 'A. Electrical fundamentals', subtopics: [{ name: 'A. Electrical fundamentals', content: null }] },
        { name: 'B. DC circuit analysis', subtopics: [{ name: 'B. DC circuit analysis', content: null }] },
        { name: 'C. AC circuit analysis', subtopics: [{ name: 'C. AC circuit analysis', content: null }] },
        { name: 'D. Motors and generators', subtopics: [{ name: 'D. Motors and generators', content: null }] },
      ],
    },
    {
      name: '6. Statics',
      topics: [
        { name: 'A. Resultants of force systems', subtopics: [{ name: 'A. Resultants of force systems', content: null }] },
        { name: 'B. Concurrent force systems', subtopics: [{ name: 'B. Concurrent force systems', content: null }] },
        { name: 'C. Equilibrium of rigid bodies', subtopics: [{ name: 'C. Equilibrium of rigid bodies', content: null }] },
        { name: 'D. Frames and trusses', subtopics: [{ name: 'D. Frames and trusses', content: null }] },
        { name: 'E. Centroids and moments of inertia', subtopics: [{ name: 'E. Centroids and moments of inertia', content: null }] },
        { name: 'F. Static friction', subtopics: [{ name: 'F. Static friction', content: null }] },
      ],
    },
    {
      name: '7. Dynamics, Kinematics, and Vibrations',
      topics: [
        { name: 'A. Kinematics of particles', subtopics: [{ name: 'A. Kinematics of particles', content: null }] },
        { name: 'B. Kinetic friction', subtopics: [{ name: 'B. Kinetic friction', content: null }] },
        { name: 'C. Newton’s second law for particles', subtopics: [{ name: 'C. Newton’s second law for particles', content: null }] },
        { name: 'D. Work-energy of particles', subtopics: [{ name: 'D. Work-energy of particles', content: null }] },
        { name: 'E. Impulse-momentum of particles', subtopics: [{ name: 'E. Impulse-momentum of particles', content: null }] },
        { name: 'F. Kinematics of rigid bodies', subtopics: [{ name: 'F. Kinematics of rigid bodies', content: null }] },
        { name: 'G. Kinematics of mechanisms', subtopics: [{ name: 'G. Kinematics of mechanisms', content: null }] },
        { name: 'H. Newton’s second law for rigid bodies', subtopics: [{ name: 'H. Newton’s second law for rigid bodies', content: null }] },
        { name: 'I. Work-energy of rigid bodies', subtopics: [{ name: 'I. Work-energy of rigid bodies', content: null }] },
        { name: 'J. Impulse-momentum of rigid bodies', subtopics: [{ name: 'J. Impulse-momentum of rigid bodies', content: null }] },
        { name: 'K. Free and forced vibrations', subtopics: [{ name: 'K. Free and forced vibrations', content: null }] },
      ],
    },
    {
      name: '8. Mechanics of Materials',
      topics: [
        { name: 'A. Shear and moment diagrams', subtopics: [{ name: 'A. Shear and moment diagrams', content: null }] },
        { name: "B. Stress transformations and Mohr's circle", subtopics: [{ name: "B. Stress transformations and Mohr's circle", content: null }] },
        { name: 'C. Stress and strain caused by axial loads', subtopics: [{ name: 'C. Stress and strain caused by axial loads', content: null }] },
        { name: 'D. Stress and strain caused by bending loads', subtopics: [{ name: 'D. Stress and strain caused by bending loads', content: null }] },
        { name: 'E. Stress and strain caused by torsional loads', subtopics: [{ name: 'E. Stress and strain caused by torsional loads', content: null }] },
        { name: 'F. Stress and strain caused by shear', subtopics: [{ name: 'F. Stress and strain caused by shear', content: null }] },
        { name: 'G. Stress and strain caused by temperature changes', subtopics: [{ name: 'G. Stress and strain caused by temperature changes', content: null }] },
        { name: 'H. Combined loading', subtopics: [{ name: 'H. Combined loading', content: null }] },
        { name: 'I. Deformations', subtopics: [{ name: 'I. Deformations', content: null }] },
        { name: 'J. Column buckling', subtopics: [{ name: 'J. Column buckling', content: null }] },
        { name: 'K. Statically indeterminate systems', subtopics: [{ name: 'K. Statically indeterminate systems', content: null }] },
      ],
    },
    {
      name: '9. Material Properties and Processing',
      topics: [
        { name: 'A. Properties', subtopics: [{ name: 'A. Properties', content: null }] },
        { name: 'B. Stress-strain diagrams', subtopics: [{ name: 'B. Stress-strain diagrams', content: null }] },
        { name: 'C. Ferrous metals', subtopics: [{ name: 'C. Ferrous metals', content: null }] },
        { name: 'D. Nonferrous metals', subtopics: [{ name: 'D. Nonferrous metals', content: null }] },
        { name: 'E. Engineered materials', subtopics: [{ name: 'E. Engineered materials', content: null }] },
        { name: 'F. Manufacturing processes', subtopics: [{ name: 'F. Manufacturing processes', content: null }] },
        { name: 'G. Phase diagrams, phase transformation, and heat treating', subtopics: [{ name: 'G. Phase diagrams, phase transformation, and heat treating', content: null }] },
        { name: 'H. Materials selection', subtopics: [{ name: 'H. Materials selection', content: null }] },
        { name: 'I. Corrosion mechanisms and control', subtopics: [{ name: 'I. Corrosion mechanisms and control', content: null }] },
        { name: 'J. Failure mechanisms', subtopics: [{ name: 'J. Failure mechanisms', content: null }] },
      ],
    },
    {
      name: '10. Fluid Mechanics',
      topics: [
        { name: 'A. Fluid properties', subtopics: [{ name: 'A. Fluid properties', content: null }] },
        { name: 'B. Fluid statics', subtopics: [{ name: 'B. Fluid statics', content: null }] },
        { name: 'C. Energy, impulse, and momentum', subtopics: [{ name: 'C. Energy, impulse, and momentum', content: null }] },
        { name: 'D. Internal flow', subtopics: [{ name: 'D. Internal flow', content: null }] },
        { name: 'E. External flow', subtopics: [{ name: 'E. External flow', content: null }] },
        { name: 'F. Compressible flow', subtopics: [{ name: 'F. Compressible flow', content: null }] },
        { name: 'G. Power and efficiency', subtopics: [{ name: 'G. Power and efficiency', content: null }] },
        { name: 'H. Performance curves', subtopics: [{ name: 'H. Performance curves', content: null }] },
        { name: 'I. Scaling laws for fans, pumps, and compressors', subtopics: [{ name: 'I. Scaling laws for fans, pumps, and compressors', content: null }] },
      ],
    },
    {
      name: '11. Thermodynamics',
      topics: [
        { name: 'A. Properties of ideal gases and pure substances', subtopics: [{ name: 'A. Properties of ideal gases and pure substances', content: null }] },
        { name: 'B Energy transfers', subtopics: [{ name: 'B Energy transfers', content: null }] },
        { name: 'C. Laws of thermodynamics', subtopics: [{ name: 'C. Laws of thermodynamics', content: null }] },
        { name: 'D. Processes', subtopics: [{ name: 'D. Processes', content: null }] },
        { name: 'E. Performance of components', subtopics: [{ name: 'E. Performance of components', content: null }] },
        { name: 'F. Power cycles', subtopics: [{ name: 'F. Power cycles', content: null }] },
        { name: 'G. Refrigeration and heat pump cycles', subtopics: [{ name: 'G. Refrigeration and heat pump cycles', content: null }] },
        { name: 'H. Nonreacting mixtures of gases', subtopics: [{ name: 'H. Nonreacting mixtures of gases', content: null }] },
        { name: 'I. Psychrometrics', subtopics: [{ name: 'I. Psychrometrics', content: null }] },
        { name: 'J. Heating, ventilation, and air-conditioning (HVAC) processes', subtopics: [{ name: 'J. Heating, ventilation, and air-conditioning (HVAC) processes', content: null }] },
        { name: 'K. Combustion and combustion products', subtopics: [{ name: 'K. Combustion and combustion products', content: null }] },
      ],
    },
    {
      name: '12. Heat Transfer',
      topics: [
        { name: 'A. Conduction', subtopics: [{ name: 'A. Conduction', content: null }] },
        { name: 'B. Convection', subtopics: [{ name: 'B. Convection', content: null }] },
        { name: 'C. Radiation', subtopics: [{ name: 'C. Radiation', content: null }] },
        { name: 'D. Transient processes', subtopics: [{ name: 'D. Transient processes', content: null }] },
        { name: 'E. Heat exchangers', subtopics: [{ name: 'E. Heat exchangers', content: null }] },
      ],
    },
    {
      name: '13. Measurements, Instrumentation, and Controls',
      topics: [
        { name: 'A. Sensors and transducers', subtopics: [{ name: 'A. Sensors and transducers', content: null }] },
        { name: 'B. Control systems', subtopics: [{ name: 'B. Control systems', content: null }] },
        { name: 'C. Dynamic system response', subtopics: [{ name: 'C. Dynamic system response', content: null }] },
        { name: 'D. Measurement uncertainty', subtopics: [{ name: 'D. Measurement uncertainty', content: null }] },
      ],
    },
    {
      name: '14. Mechanical Design and Analysis',
      topics: [
        { name: 'A. Stress analysis of machine elements', subtopics: [{ name: 'A. Stress analysis of machine elements', content: null }] },
        { name: 'B. Failure theories and analysis', subtopics: [{ name: 'B. Failure theories and analysis', content: null }] },
        { name: 'C. Deformation and stiffness', subtopics: [{ name: 'C. Deformation and stiffness', content: null }] },
        { name: 'D. Springs', subtopics: [{ name: 'D. Springs', content: null }] },
        { name: 'E. Pressure vessels and piping', subtopics: [{ name: 'E. Pressure vessels and piping', content: null }] },
        { name: 'F. Bearings', subtopics: [{ name: 'F. Bearings', content: null }] },
        { name: 'G. Power screws', subtopics: [{ name: 'G. Power screws', content: null }] },
        { name: 'H. Power transmission', subtopics: [{ name: 'H. Power transmission', content: null }] },
        { name: 'I. Joining methods', subtopics: [{ name: 'I. Joining methods', content: null }] },
        { name: 'J. Manufacturability', subtopics: [{ name: 'J. Manufacturability', content: null }] },
        { name: 'K. Quality and reliability', subtopics: [{ name: 'K. Quality and reliability', content: null }] },
        { name: 'L. Components', subtopics: [{ name: 'L. Components', content: null }] },
        { name: 'M. Engineering drawing interpretations and geometric dimensioning and tolerancing (GD and T)', subtopics: [{ name: 'M. Engineering drawing interpretations and geometric dimensioning and tolerancing (GD and T)', content: null }] },
      ],
    },
  ],
  Other: [
    {
        name: '1. Mathematics',
        topics: [
            { name: 'A. Analytic geometry', subtopics: [{ name: 'A. Analytic geometry', content: null }] },
            { name: 'B. Calculus', subtopics: [{ name: 'B. Calculus', content: null }] },
            { name: 'C. Vector analysis', subtopics: [{ name: 'C. Vector analysis', content: null }] },
            { name: 'D. Differential equations', subtopics: [{ name: 'D. Differential equations', content: null }] },
            { name: 'E. Linear algebra', subtopics: [{ name: 'E. Linear algebra', content: null }] },
            { name: 'F. Numerical methods', subtopics: [{ name: 'F. Numerical methods', content: null }] },
        ],
    },
    {
        name: '2. Probability and Statistics',
        topics: [
            { name: 'A. Measures of central tendencies and dispersions', subtopics: [{ name: 'A. Measures of central tendencies and dispersions', content: null }] },
            { name: 'B. Probability distributions', subtopics: [{ name: 'B. Probability distributions', content: null }] },
            { name: 'C. Expected value', subtopics: [{ name: 'C. Expected value', content: null }] },
            { name: 'D. Hypothesis testing', subtopics: [{ name: 'D. Hypothesis testing', content: null }] },
            { name: 'E. Confidence intervals', subtopics: [{ name: 'E. Confidence intervals', content: null }] },
            { name: 'F. Regression and curve fitting', subtopics: [{ name: 'F. Regression and curve fitting', content: null }] },
        ],
    },
    {
        name: '3. Chemistry',
        topics: [
            { name: 'A. Periodic table', subtopics: [{ name: 'A. Periodic table', content: null }] },
            { name: 'B. Stoichiometry', subtopics: [{ name: 'B. Stoichiometry', content: null }] },
            { name: 'C. Reactions', subtopics: [{ name: 'C. Reactions', content: null }] },
            { name: 'D. Acids and bases', subtopics: [{ name: 'D. Acids and bases', content: null }] },
            { name: 'E. Chemical equilibrium', subtopics: [{ name: 'E. Chemical equilibrium', content: null }] },
        ],
    },
    {
        name: '4. Instrumentation and Data Acquisition',
        topics: [
            { name: 'A. Sensors', subtopics: [{ name: 'A. Sensors', content: null }] },
            { name: 'B. Transducers', subtopics: [{ name: 'B. Transducers', content: null }] },
            { name: 'C. Signal conditioning', subtopics: [{ name: 'C. Signal conditioning', content: null }] },
            { name: 'D. Data collection', subtopics: [{ name: 'D. Data collection', content: null }] },
            { name: 'E. Uncertainty analysis', subtopics: [{ name: 'E. Uncertainty analysis', content: null }] },
        ],
    },
    {
        name: '5. Ethics and Professional Practice',
        topics: [
            { name: 'A. Codes of ethics and licensure', subtopics: [{ name: 'A. Codes of ethics and licensure', content: null }] },
            { name: 'B. Professional liability and contracts', subtopics: [{ name: 'B. Professional liability and contracts', content: null }] },
            { name: 'C. Public health, safety, and welfare', subtopics: [{ name: 'C. Public health, safety, and welfare', content: null }] },
        ],
    },
    {
        name: '6. Safety, Health, and Environment',
        topics: [
            { name: 'A. Hazard identification', subtopics: [{ name: 'A. Hazard identification', content: null }] },
            { name: 'B. Risk assessment', subtopics: [{ name: 'B. Risk assessment', content: null }] },
            { name: 'C. Environmental regulations', subtopics: [{ name: 'C. Environmental regulations', content: null }] },
            { name: 'D. Safety procedures', subtopics: [{ name: 'D. Safety procedures', content: null }] },
        ],
    },
    {
        name: '7. Engineering Economics',
        topics: [
            { name: 'A. Time value of money', subtopics: [{ name: 'A. Time value of money', content: null }] },
            { name: 'B. Cost estimation', subtopics: [{ name: 'B. Cost estimation', content: null }] },
            { name: 'C. Economic analysis', subtopics: [{ name: 'C. Economic analysis', content: null }] },
            { name: 'D. Depreciation', subtopics: [{ name: 'D. Depreciation', content: null }] },
        ],
    },
    {
        name: '8. Statics',
        topics: [
            { name: 'A. Resultants of force systems', subtopics: [{ name: 'A. Resultants of force systems', content: null }] },
            { name: 'B. Equilibrium of rigid bodies', subtopics: [{ name: 'B. Equilibrium of rigid bodies', content: null }] },
            { name: 'C. Frames and trusses', subtopics: [{ name: 'C. Frames and trusses', content: null }] },
            { name: 'D. Centroids and moments of inertia', subtopics: [{ name: 'D. Centroids and moments of inertia', content: null }] },
            { name: 'E. Static friction', subtopics: [{ name: 'E. Static friction', content: null }] },
        ],
    },
    {
        name: '9. Dynamics',
        topics: [
            { name: 'A. Kinematics', subtopics: [{ name: 'A. Kinematics', content: null }] },
            { name: 'B. Kinetics', subtopics: [{ name: 'B. Kinetics', content: null }] },
            { name: 'C. Work, energy, and power', subtopics: [{ name: 'C. Work, energy, and power', content: null }] },
            { name: 'D. Impulse and momentum', subtopics: [{ name: 'D. Impulse and momentum', content: null }] },
        ],
    },
    {
        name: '10. Strength of Materials',
        topics: [
            { name: 'A. Stress and strain', subtopics: [{ name: 'A. Stress and strain', content: null }] },
            { name: 'B. Deformation and stiffness', subtopics: [{ name: 'B. Deformation and stiffness', content: null }] },
            { name: 'C. Beams, shafts, and columns', subtopics: [{ name: 'C. Beams, shafts, and columns', content: null }] },
            { name: 'D. Combined stresses', subtopics: [{ name: 'D. Combined stresses', content: null }] },
            { name: 'E. Failure theories', subtopics: [{ name: 'E. Failure theories', content: null }] },
        ],
    },
    {
        name: '11. Materials Science',
        topics: [
            { name: 'A. Mechanical properties', subtopics: [{ name: 'A. Mechanical properties', content: null }] },
            { name: 'B. Thermal properties', subtopics: [{ name: 'B. Thermal properties', content: null }] },
            { name: 'C. Electrical properties', subtopics: [{ name: 'C. Electrical properties', content: null }] },
            { name: 'D. Material selection', subtopics: [{ name: 'D. Material selection', content: null }] },
            { name: 'E. Corrosion', subtopics: [{ name: 'E. Corrosion', content: null }] },
        ],
    },
    {
        name: '12. Fluid Mechanics',
        topics: [
            { name: 'A. Fluid properties', subtopics: [{ name: 'A. Fluid properties', content: null }] },
            { name: 'B. Fluid statics', subtopics: [{ name: 'B. Fluid statics', content: null }] },
            { name: 'C. Fluid dynamics', subtopics: [{ name: 'C. Fluid dynamics', content: null }] },
            { name: 'D. Pipe flow and friction losses', subtopics: [{ name: 'D. Pipe flow and friction losses', content: null }] },
            { name: 'E. Turbomachinery', subtopics: [{ name: 'E. Turbomachinery', content: null }] },
        ],
    },
    {
        name: '13. Basic Electrical Engineering',
        topics: [
            { name: 'A. Charge, current, voltage, resistance, and power', subtopics: [{ name: 'A. Charge, current, voltage, resistance, and power', content: null }] },
            { name: 'B. AC and DC circuits', subtopics: [{ name: 'B. AC and DC circuits', content: null }] },
            { name: 'C. Series and parallel circuits', subtopics: [{ name: 'C. Series and parallel circuits', content: null }] },
            { name: 'D. Motors and generators', subtopics: [{ name: 'D. Motors and generators', content: null }] },
        ],
    },
    {
        name: '14. Thermodynamics and Heat Transfer',
        topics: [
            { name: 'A. Properties of substances', subtopics: [{ name: 'A. Properties of substances', content: null }] },
            { name: 'B. First Law of Thermodynamics', subtopics: [{ name: 'B. First Law of Thermodynamics', content: null }] },
            { name: 'C. Second Law of Thermodynamics', subtopics: [{ name: 'C. Second Law of Thermodynamics', content: null }] },
            { name: 'D. Thermodynamic cycles', subtopics: [{ name: 'D. Thermodynamic cycles', content: null }] },
            { name: 'E. Conduction', subtopics: [{ name: 'E. Conduction', content: null }] },
            { name: 'F. Convection', subtopics: [{ name: 'F. Convection', content: null }] },
            { name: 'G. Radiation', subtopics: [{ name: 'G. Radiation', content: null }] },
        ],
    },
  ],
};

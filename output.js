const topConv= new State('Hello, we are NTU Libraries! We are here to help answer some of your questions! What would you like to find out about?',['Opening Hours','Booking Spaces', 'Library Locations', 'Requesting Materials', 'Exam Materials'],[]);
const openingHours= new State('Choose your time period',['Vacation', 'Semester Period', 'LWM Extended Hours'],[]);
const vacation= new State('Choose the day',['Mon-Fri', 'Saturday', 'Sunday & PH'],[]);
const semPeriod= new State('Choose the day',['Mon-Fri', 'Saturday', 'Sunday & PH'],[]);
const extendedPeriod= new State('Choose the day',['Mon-Fri', 'Saturday', 'Sunday & PH'],[]);
const monFriVac= new State('Here you go! The opening hours are:<br><br><b>8.30am &mdash; 7.00pm</b><br>Close at 5.00pm:<br>- Art, Design & Media Library<br>- Communication & Information Library<br>- Wang Gungwu Library<br>',['Ok'],[]);
const satVac= new State('Here you go! The opening hours are:<br><br><b>8.30am &mdash; 5.00pm</b><br>Closed:<br>- Art, Design & Media Library<br>- Communication & Information Library<br>- Wang Gungwu Library<br>',['Ok'],[]);
const sunVac= new State('Sorry<br>Libraries are <b>closed</b> on Sundays and Public Holidays!',['Ok'],[]);
const monFriSem= new State('Here you go! The opening hours are:<br><br><b>8.30am &mdash; 9.30pm</b><br><i>Wang Gungwu Library closes at 5.00pm.</i>',['Ok'],[]);
const satSem= new State('Here you go! The opening hours are:<br><br><b>8.30am &mdash; 5.00pm</b><br><i>Communication & Information Library closes at 1.00pm.<br>Wang Gungwu Library: Closed</i>',['Ok'],[]);
const sunSem= new State('Sorry<br>Libraries are <b>closed</b> on Sundays and Public Holidays!',['Ok'],[]);
const monFriExt= new State('Here you go! The opening hours are:<br><br><b>8.30am &mdash; 11.30pm</b><br><br>Services available during extended hours:<br>1. The following are available at all times during the library\'s opening hours:<br>&mdash; PCs, Self-check machines, Self-service photocopying, Network printing<br>2. The main printing room will be closed during extended hours on weekdays, but will be open during the weekends.Ê<br>3. Facilities at Level 2 Learning Commons are not available during extended hours.<br>',['Ok'],[]);
const satExt= new State('Here you go! The opening hours are:<br><br><b>8.30am &mdash; 7.00pm</b><br><br>Services available during extended hours:<br>1. The following are available at all times during the library\'s opening hours:<br>&mdash; PCs, Self-check machines, Self-service photocopying, Network printing<br>2. The main printing room will be closed during extended hours on weekdays, but will be open during the weekends.Ê<br>3. Facilities at Level 2 Learning Commons are not available during extended hours.<br>',['Ok'],[]);
const sunExt= new State('Here you go! The opening hours are:<br><br><b>8.30am &mdash; 7.00pm</b><br><br>Only at Lee Wee Nam Library! &#9786;<br>Services available during extended hours:<br>1. The following are available at all times during the library\'s opening hours:<br>&mdash; PCs, Self-check machines, Self-service photocopying, Network printing<br>2. The main printing room will be closed during extended hours on weekdays, but will be open during the weekends.Ê<br>3. Facilities at Level 2 Learning Commons are not available during extended hours.<br>',['Ok'],[]);
const libLocations= new State('Choose your preferred library:<br>1. Art, Design & Media Library<br>2. Business Library<br>3. Chinese Library<br>4. Communication &amp; Information Library<br>5. Humanities &amp; Social Sciences Library<br>6. Lee Wee Nam Library<br>7. Library Outpost<br>',['1','2','3','4','5','6','7'],[]);
const admLoc= new State('Here you go! &#9786;<br><br>Art, Design & Media Library<br><b>ART &mdash; 01 &mdash; 03</b><br><a href=\'http://maps.ntu.edu.sg/maps#q:Art%2c%20Design%20&%20Media%20Library%20%28ADM%29\' target=\'_blank\'>Locate us<\a><br>Hope you enjoy your experience at NTU Library!',['Ok'],[]);
const bizlibLoc= new State('Here you go! &#9786;<br><br>Business Library<br><b>N2 &mdash; B2b &mdash; 07</b><br><a href=\'http://maps.ntu.edu.sg/maps#q:BUSINESS%20LIBRARY\' optarget=\'_blank\'>Locate us<\a><br>Hope you enjoy your experience at NTU Library!',['Ok'],[]);
const chilibLoc= new State('Here you go! &#9786;<br><br>Chinese Library<br><b>S3.2 &mdash; B5 &mdash; 01</b><br><a href=\'http://maps.ntu.edu.sg/maps#q:Chinese%20Library\' target=\'_blank\'>Locate us<\a><br>Hope you enjoy your experience at NTU Library!',['Ok'],[]);
const comLoc= new State('Here you go! &#9786;<br><br>Communication &amp; Information Library<br><b>CS &mdash 01 &mdash; 18</b><br><a href=\'http://maps.ntu.edu.sg/maps#q:CMIL\' target=\'_blank\'>Locate us<\a><br>Hope you enjoy your experience at NTU Library!',['Ok'],[]);
const hssLoc= new State('Here you go! &#9786;<br><br>Humanities &amp; Social Sciences Library<br><b>S4 &mdash; B3c</b><br><a href=\'http://maps.ntu.edu.sg/maps#q:hss%20LIBRARY\' target=\'_blank\'>Locate us<\a><br>Hope you enjoy your experience at NTU Library!',['Ok'],[]);
const lwnLoc= new State('Here you go! &#9786;<br><br>Lee Wee Nam Library<br><b>NS3 &mdash; 03 &mdash; 01</b><br><a href=\'http://maps.ntu.edu.sg/maps#q:lwn%20LIBRARY\' target=\'_blank\'>Locate us<\a><br>Hope you enjoy your experience at NTU Library!',['Ok'],[]);
const outpostLoc= new State('Here you go! &#9786;<br><br>Library Outpost<br><b>LHS &mdash; 01 &mdash; 03</b><br><a href=\'http://maps.ntu.edu.sg/maps#q:the%20hive\' target=\'_blank\'>Locate us<\a><br>Hope you enjoy your experience at NTU Library!',['Ok'],[]);
const bookSpaces= new State('Under Construction<br>Sorry',['Ok'],[]);
const reqMat= new State('What would you like to find out about?',['Reserve/Place hold', 'Interlibrary loan', 'Buy new books/journals', 'Closed stacks', 'Research documents delivery', 'Check my Account'],[]);
const reservePlaceHold= new State('Reserve/Place hold for items currently on loan:',['Making Reservation', 'View or cancel requests'],[]);
const makingReservation= new State('<b>Use OneSearch:</b><br>&mdash; Find the item you require.<br>&mdash; Click \"Find Details or Reserve This Item\".<br>&mdash; Click \"Place Hold\" on the left.<br>&mdash; Login using your username and password.<br>&mdash; Select your Pickup Library and click \"Place Hold\".<br><b>Approach Service Desk for following reservations:</b><br>&mdash; Items that are being catalogued<br>&mdash; Items that consist of multiple volumes (e.g. periodicals or journals)<br><br><b>Reserved items must be collected within 6 days after you receive our email!</b><br><br>Note:<br>Items in the Course Reserves cannot be reserved.<br>You cannot place a request for an item which is currently on loan to you.<br>',['Ok'],[]);
const viewOrCancelRequests= new State('Login to your <a href=\'https://eps.ntu.edu.sg/\'>library account</a> to view or cancel your reservations!',['Ok'],[]);
const interLibraryLoan= new State('Borrow books from other libraries if NTU Library do not have what you need!<br>However, materials are restricted to teaching or research related only.<br>EmailÊ<a target=\'_blank\' href=\'http://www.ntu.edu.sg/Library/Documents/ILL-request.docx\'>ILL Form</a> toÊlibrary@ntu.edu.sg. <br>You are limited to 2 ILL items at any one time.<br>Turnaround time:<br>3-7 days depending on difficulty in search of item<br><br>Charges:<br>You will be notified of the relevant charges.<br><br>Loan Period:<br>Most loan items are for 2-3 weeks. <br>All requests and renewals are subject to the approval of lending library.<br>',['Ok'],[]);
const buyNewBooks= new State('Before you recommend, please make sure that the title is not available in our Library.<br>Check via Library Catalogue and E-Journal Listing!<br>For urgent journal articles, please use Research Documents Delivery service.<br><br>Are you a student or a staff?<br>',['Student', 'Staff'],[]);
const buyStudent= new State('Fill up the <a target=\'_blank\' href=\'https://blogs.ntu.edu.sg/lib-contact-us/?option=lib_resources&src=resources_request\'>request form</a> with the following information:<br><br>1. Title, Author, Edition, Publisher, ISBN, Price of the item<br>2. Your full name, school and matriculation card number<br>3. Reason for your recommendation<br><br>Recommendations will be processed within a week.<br>Approved recommendations will be available for borrowing within 3&mdash;12 weeks!<br>Do indicate if you would like to be notified when the item is available for borrowing.',['Ok'],[]);
const buyStaff= new State('1. Login toÊStaffLink <br>2. Find the online Recommendation Form. Look underÊResource RequestÊ>ÊLibrary ServicesÊ>Journal Recommendation. <br>3. Follow the instructions on the form. <br><br>Recommendations will be processed within 1&mdash;6 months. <br>StaffLink will update you on the process. <br>',['Ok'],[]);
const closedStacks= new State('Closed stack items are kept in off-site storage facilities!<br>Identified by the status of its location when you use the Library Catalogue.<br><br>Placing a request:<br>NTU Students and Staff with NTU network account: <a target=\'blank\'  href=\'https://venus.wis.ntu.edu.sg/lib/ServiceRequest/Login.aspx\'>Click Here</a><br>Associate members and staff without StaffLink: <a target=\'_blank\' href=\'https://blogs.ntu.edu.sg/lib-contact-us/?option=others \'>Click Here</a><br><br>Turnaround time:<br>Requests generally fulfilled within 2-3 working days (weekdays excluding public holidays)<br>',['Ok'],[]);
const researchDocumentsDelivery= new State('Helping researchers locate and obtain copies of research materials that are not found in our Library. <br>Delivery of digital or print copies of journal articles, conference papers, technical papers, theses, etc.<br><br>SIMtech staff and associate members can request for document delivery by sending <a target=\'_blank\' href=\'http://www.ntu.edu.sg/Library/Documents/DDS_form.doc\'>DDS Form</a> to library@ntu.edu.sg<br><br><b>This service is not available to other users which were not stated, sorry. &#9785;</b><br><br>Turnaround time:<br>1-3 days depending on difficulty in search of item<br><br>Charges:<br>You will be notified of the relevant charges.',['Ok'],[]);
const checkMyAccount= new State('To view your loans & holds, renew your items and to check for outstanding fines, you will need an NTU network account and log in <a target=\'_blank\' href=\'http://www.ntu.edu.sg/Library/LibAccount\'>here</a> <br><br><b>View your loans & holds:</b><br>Login > Checkouts (loans) or Holds<br><br><b>Renew your items:</b><br>Renewal limit is according to your borrowing privileges <a target=\'_blank\' href=\'http://www.ntu.edu.sg/Library/Pages/access/privileges-overview.aspx\'>here</a> <br>Items in the Reserves can only be renewed at the service desk.',['Query on overdue loans', 'Ok'],[]);
const queryOverdue= new State('<b>Overdue loans:</b>Login > Fines<br><br>- Fines are calculated from due date of item excluding Sundays and Public Holidays.<br>- Fines for items in the Course Reserves are charged by the hour.<br>- Borrowing privileges are stopped when outstanding fines max $10.00.<br>- Payment of fines via CashCard, EZ-Link card, NETS or Cheque. <br><br>More information at <a target=\'_blank\' href=\'http://www.ntu.edu.sg/Library/Pages/access/overdue.aspx\'>here<\a>',['Ok'],[]);
const examPapers= new State('Alumni library members have no access to past year exam papers. <br><br><b>Past-year examination papers available</b> at <a target=\'_blank\' href=\'https://ts.ntu.edu.sg/sites/lib-repository/exam-question-papers\'>here</a>.<br>Up to 5 years of exam papers (3 years only for Nanyang Business School)<br>Some courses have multiple codes, identify the main course code.<br>Schools may not want certain papers to be made available on web. As such, there will be an *asterisk next to the course code.<br>Send an email to Librarians if you cannot find your exam papers.',['Ok'],[]);
topConv.setNextStates = [openingHours, bookSpaces, libLocations,reqMat,examPapers];
openingHours.setNextStates = [vacation, semPeriod, extendedPeriod];
vacation.setNextStates = [monFriVac, satVac, sunVac];
semPeriod.setNextStates = [monFriSem, satSem, sunSem];
extendedPeriod.setNextStates = [monFriExt, satExt, sunExt];
monFriVac.setNextStates = [topConv];
satVac.setNextStates = [topConv];
sunVac.setNextStates = [topConv];
monFriSem.setNextStates = [topConv];
satSem.setNextStates = [topConv];
sunSem.setNextStates = [topConv];
monFriExt.setNextStates = [topConv];
satExt.setNextStates = [topConv];
sunExt.setNextStates = [topConv];
libLocations.setNextStates = [admLoc, bizlibLoc, chilibLoc, comLoc, hssLoc, lwnLoc, outpostLoc];
admLoc.setNextStates = [topConv];
bizlibLoc.setNextStates = [topConv];
chilibLoc.setNextStates = [topConv];
comLoc.setNextStates = [topConv];
hssLoc.setNextStates = [topConv];
lwnLoc.setNextStates = [topConv];
outpostLoc.setNextStates = [topConv];
bookSpaces.setNextStates = [topConv];
reqMat.setNextStates = [reservePlaceHold, interLibraryLoan, buyNewBooks, closedStacks, researchDocumentsDelivery, checkMyAccount];
reservePlaceHold.setNextStates = [makingReservation, viewOrCancelRequests];
makingReservation.setNextStates = [topConv];
viewOrCancelRequests.setNextStates = [topConv];
interLibraryLoan.setNextStates = [topConv];
buyNewBooks.setNextStates = [buyStudent, buyStaff];
buyStudent.setNextStates = [topConv];
buyStaff.setNextStates = [topConv];
closedStacks.setNextStates = [topConv];
researchDocumentsDelivery.setNextStates = [topConv];
checkMyAccount.setNextStates = [queryOverdue, topConv];
queryOverdue.setNextStates = [topConv];
examPapers.setNextStates = [topConv];

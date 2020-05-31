var i2c = new I2C(); i2c.setup({scl: D27, sda: D26, bitrate: 100000}); 
var LEFT_MOTOR = 0; 
var RIGHT_MOTOR = 1; 
var CLOCKWISE = 0; 
var COUNTER_CLOCKWISE = 1;
var FORWARD = 0; 
var BACKWARD = 1; 
var LEFT = 2; 
var RIGHT = 3; 
var DIST_TO_ANGLE = 33.645; 
var ROBOT_ANGLE_TO_WHEEL_ANGLE = 3; 
var ir_adc = [0, 0, 0, 0, 0];
function motor_move(motor, dir, vel, angle) {
	i2c.writeTo(0x01, [0x02, 2, motor, vel, angle >> 8, angle & 0x00FF, (2 + motor + vel + (angle >> 8) + (angle & 0x00FF)) & 0xFF]);
}
function motor_stop(motor) {
	i2c.writeTo(0x01, [0x02, 3, motor, (3 + motor) & 0xFF]);
}
function robot_move_dist(dir, vel, dist_cm) {
	if ((dir == FORWARD) && (dir == BACKWARD)) {
		i2c.writeTo(0x01, [0x02, 4, dir, vel, Math.round(dist_cm * DIST_TO_ANGLE) >> 8, Math.round(dist_cm * DIST_TO_ANGLE) & 0x00FF, (4 + dir + vel + (Math.round(dist_cm * 33.645) >> 8) + (Math.round(dist_cm * 33.645) & 0x00FF)) & 0xFF]);
	} 
}
function robot_turn(dir, vel, angle) {
	if ((dir == LEFT) && (dir == RIGHT)) {
		i2c.writeTo(0x01, [0x02, 4, dir, vel, (angle * ROBOT_ANGLE_TO_WHEEL_ANGLE) >> 8, (angle * ROBOT_ANGLE_TO_WHEEL_ANGLE) & 0x00FF, (4 + dir + vel + ((angle * ROBOT_ANGLE_TO_WHEEL_ANGLE) >> 8) + ((angle * ROBOT_ANGLE_TO_WHEEL_ANGLE) & 0x00FF)) & 0xFF]);
	}
}
function robot_move_angle(dir, vel, angle) {
    i2c.writeTo(0x01, [0x02, 4, dir, vel, angle >> 8, angle & 0x00FF, (4 + dir + vel + (angle >> 8) + (angle & 0x00FF)) & 0xFF]);
}
function robot_stop() {i2c.writeTo(0x01, [0x02, 5, (5) & 0xFF]);}
var ir_adc_loop = setInterval(function() {
  i2c.writeTo(0x01, [1, 10]); i2c.writeTo(0x01, [14]); var ir_i2c = i2c.readFrom(0x01, 10); 
  ir_adc = [((ir_i2c[0] * 256) + ir_i2c[1]), // 적외선 센서 #1 (A0, PF7, ADC7) ADC값 환산
		      ((ir_i2c[2] * 256) + ir_i2c [3]), // 적외선 센서 #2 (A1, PF6, ADC6) ADC값 환산
		      ((ir_i2c[4] * 256) + ir_i2c [5]), // 적외선 센서 #3 (A2, PF5, ADC5) ADC값 환산
		      ((ir_i2c[6] * 256) + ir_i2c [7]), // 적외선 센서 #4 (A3, PF4, ADC4) ADC값 환산
		      ((ir_i2c[8] * 256) + ir_i2c [9])]; // 적외선 센서 #5 (A4, PF1, ADC1) ADC값 환산
}, 10);
export const BombermanStateType = {
	IDLE: "idle",
	MOVING: "moving",
};

export const frames = new Map([
	["idle-down", [[4, 5, 17, 22][(8, 15)]]],
	["move-down-1", [[30, 5, 17, 22][(7, 15)]]],
	["move-down-2", [[61, 5, 17, 22][(9, 15)]]],
	["idle-side", [[79, 5, 18, 22][(7, 15)]]],
	["move-side-1", [[104, 5, 17, 21][(8, 15)]]],
	["move-side-2", [[129, 5, 18, 21][(8, 15)]]],
	["idle-up", [[154, 4, 17, 22][(8, 15)]]],
	["move-up-1", [[180, 4, 17, 22][(7, 15)]]],
	["move-up-2", [[211, 4, 17, 22][(9, 15)]]],
	["idle-down-left", [[5, 55, 17, 20][(6, 15)]]],
	["idle-up-left", [[30, 55, 17, 20][(6, 15)]]],
]);

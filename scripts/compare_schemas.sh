#!/bin/bash

# Copyright 2015 Westfälische Hochschule
#
# This file is part of Poodle.
#
# Poodle is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# Poodle is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with Poodle.  If not, see <http://www.gnu.org/licenses/>.



# Compares the database schema on the local machine
# with the schema on the provided server.

if [[ -z $1 ]]; then
	echo 'missing server parameter'
	exit 1
fi

meld \
	<(pg_dump -U poodle --schema-only) \
	<(ssh "$1" pg_dump -U poodle --schema-only)

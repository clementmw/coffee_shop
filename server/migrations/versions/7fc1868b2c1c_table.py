"""table

Revision ID: 7fc1868b2c1c
Revises: 9c5d3b9b23ae
Create Date: 2024-02-16 15:25:28.023220

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7fc1868b2c1c'
down_revision = '9c5d3b9b23ae'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('purchases', schema=None) as batch_op:
        batch_op.add_column(sa.Column('quantity', sa.Integer(), nullable=True))
        batch_op.drop_column('quantity_purchased')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('purchases', schema=None) as batch_op:
        batch_op.add_column(sa.Column('quantity_purchased', sa.INTEGER(), nullable=True))
        batch_op.drop_column('quantity')

    # ### end Alembic commands ###
